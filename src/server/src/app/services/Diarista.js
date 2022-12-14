const pool = require('../../configs/db');

exports.rate = async ({ idPagamento, numServico, rating }) => {
  const { rows } = await pool.query(
    `
    insert into avalia_diarista (
      id_pagamento,
      telefone_diarista,
      avaliacao_diarista
    )
    values ($1, (
      select ats.telefone_diarista
      from atende_servico ats
      join servico s
      on s.num_servico_criado = ats.num_servico_atendido
      where s.num_servico_criado = $2
    ), $3)
    returning *;
  `,
    [idPagamento, numServico, rating]
  );

  return rows[0];
};
