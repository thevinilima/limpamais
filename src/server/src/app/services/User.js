const pool = require('../../configs/db');
const jwt = require('jsonwebtoken');

exports.getByTel = async (telefone) => {
  if (!telefone) return null;

  try {
    const user = await pool.query(
      `
      select telefone, nome, cpf_cnpj
      from usuario
      where telefone = $1;
    `,
      [telefone]
    );

    return user;
  } catch (e) {
    return null;
  }
};

exports.getFromToken = async (headerToken) => {
  const token = headerToken.split(' ')[1];
  const { telefone } = jwt.verify(token, process.env.JWT_SECRET);
  return await this.getByTel(telefone);
};
