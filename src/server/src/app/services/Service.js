const pool = require('../../configs/db');

exports.create = async ({ desc, dateTime, rooms, value, address }, userTel) => {
  await pool.query(
    `
    insert into cria_servico (telefone_usuario)
    values ($1)
    returning num_servico;
  `,
    [userTel]
  );

  const res = await pool.query(
    `
    select * from cria_servico where telefone_usuario = ${userTel} order by num_servico desc limit 1;
  `
  );

  const num_servico = res.rows[0].num_servico;

  const service = await pool.query(
    `
    insert into servico (
      num_servico_criado,
      descricao_atividade,
      data_horario,
      comodos,
      valor,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf
    )
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    returning *;
  `,
    [
      num_servico,
      desc,
      dateTime,
      rooms,
      value,
      address.cep,
      address.logradouro,
      address.numero,
      address.complemento,
      address.bairro,
      address.cidade,
      address.uf,
    ]
  );

  return service;
};

exports.getServices = async ({ tel }) => {
  const result = await pool.query(
    `select s1.*
    from servico s1
    where s1.status = 'ABERTO'
    union
      select s2.*
      from servico s2
      join atende_servico ats
      on ats.num_servico_atendido = s2.num_servico_criado
      where ats.telefone_diarista = $1;`,
    [tel]
  );

  if (!result.rowCount) return null;

  return result;
};

exports.getRequesterServices = async (tel) => {
  const result = await pool.query(
    `
    SELECT
      s.*,
      (
        select d.chave_pix from diarista d
        where d.telefone = ats.telefone_diarista
      ) as pix_diarista,
      p.id_pagamento
    FROM servico s
    INNER JOIN cria_servico cs
    ON s.num_servico_criado = cs.num_servico
    LEFT JOIN atende_servico ats
    ON s.num_servico_criado = ats.num_servico_atendido
    LEFT JOIN pagamento p
    ON p.num_servico_pago = s.num_servico_criado
    WHERE cs.telefone_usuario = $1;
  `,
    [tel]
  );

  if (!result.rowCount) return null;

  return result;
};

exports.createTreatmentService = async (num_servico_atendido, tel_diarista) => {
  const result = await pool.query(
    `insert into atende_servico (num_servico_atendido, telefone_diarista)
    values  ($1, $2) returning *`,
    [num_servico_atendido, tel_diarista]
  );

  if (!result.rowCount) return null;

  return result;
};

exports.setServiceStatus = async (newStatus, serviceId) => {
  const result = await pool.query(
    `UPDATE servico
    SET status = $1
    WHERE num_servico_criado = $2`,
    [newStatus, serviceId]
  );

  if (!result.rowCount) return null;

  return result;
};

exports.payService = async ({ numServico }) => {
  const payment = await pool.query(
    `insert into pagamento (
      num_servico_pago,
      telefone_usuario,
      telefone_diarista
    ) values ($1, (
      select cs.telefone_usuario
      from servico s
      join cria_servico cs
      on cs.num_servico = s.num_servico_criado
      where s.num_servico_criado = $1
    ), (
      select ats.telefone_diarista
      from servico s
      join atende_servico ats
      on ats.num_servico_atendido = s.num_servico_criado
      where s.num_servico_criado = $1
    ))
    returning *;`,
    [numServico]
  );

  return payment.rows[0] || null;
};
