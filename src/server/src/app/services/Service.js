const pool = require('../../configs/db');

exports.create = async ({ desc, dateTime, rooms, value, address }, userTel) => {
  const createdServiceNumber = await pool.query(
    `
    insert into cria_servico (telefone_usuario)
    values ($1)
    returning num_servico;
  `,
    [userTel]
  );

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
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    returning *;
  `,
    [
      createdServiceNumber,
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

exports.getServices = async () => {
  const result = await pool.query(`select * from servico;`);

  if (!result.rowCount) return null;

  return result;
};
