const pool = require('../../configs/db');
const bcrypt = require('bcryptjs');

const User = require('../services/User');

exports.createUser = async (req, res) => {
  const { cel, password, name, document } = req.body;

  const { rowCount } = await pool.query(
    'select 1 from usuario where cpf_cnpj = $1',
    [document]
  );

  if (rowCount) {
    return res
      .status(400)
      .json('Usuário com esse documento já está cadastrado');
  }

  const hash = await bcrypt.hash(password, 8);

  await pool.query(
    `
      INSERT INTO usuario (telefone, senha, nome, cpf_cnpj)
      VALUES ($1, $2, $3, $4);
    `,
    [cel, hash, name, document]
  );

  res.status(200).json('Usuário cadastrado com sucesso!');
};

exports.getUserData = async (req, res) => {
  const { authorization } = req.headers;

  const user = await User.getFromToken(authorization);

  res.status(200).json({ user });
};
