const pool = require('../../configs/db/index.js');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { sign } = jsonwebtoken;

  const { password, tel } = req.body;

  const { rows } = await pool.query(
    'select * from usuario where telefone = $1',
    [tel]
  );

  const user = rows[0];

  if (!user) {
    return res.status(400).json('Usuário e/ou senha incorreto');
  }

  const passwordMatch = await bcrypt.compare(password, user.senha);

  if (!passwordMatch) {
    return res.status(400).json('Usuário e/ou senha incorreto');
  }

  const token = sign({ telefone: user.telefone }, process.env.JWT_SECRET, {
    subject: String(user.telefone),
    expiresIn: '1d',
  });

  return res.status(200).json({ message: 'Login com sucesso!', token });
};
