const pool = require('../../configs/db');
const jwt = require('jsonwebtoken');

exports.getByTel = async (telefone) => {
  if (!telefone) return null;

  try {
    const result = await pool.query(
      `
      select telefone, nome, cpf_cnpj, is_diarista
      from usuario
      where telefone = $1;
    `,
      [telefone]
    );

    if (!result.rowCount) return null;

    return result.rows[0];
  } catch (e) {
    return null;
  }
};

exports.getFromToken = async (headerToken) => {
  const token = headerToken.split(' ')[1];
  const { telefone } = jwt.verify(token, process.env.JWT_SECRET);
  return await this.getByTel(telefone);
};

exports.rate = async ({ idPagamento, numServico, rating }) => {
  const { rows } = await pool.query(
    `
    insert into avalia_usuario (
      id_pagamento,
      telefone_usuario,
      avaliacao_usuario
    )
    values ($1, (
      select u.telefone
      from usuario u
      join cria_servico cs
      on cs.telefone_usuario = u.telefone
      where cs.num_servico = $2
    ), $3)
    returning *;
  `,
    [idPagamento, numServico, rating]
  );

  return rows[0];
};
