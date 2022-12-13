const pool = require('../../configs/db');

exports.rate = async ({ idPagamento, tel, rating }) => {
  const { rows } = await pool.query(
    `
    insert into avalia_diarista (
      id_pagamento,
      telefone_diarista,
      avaliacao_diarista
    )
    values ($1, $2, $3)
    returning *;
  `,
    [idPagamento, tel, rating]
  );

  return rows[0];
};
