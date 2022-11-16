import { sql } from 'slonik';
import pool from '../../configs/db/index.js';
import bcrypt from 'bcrypt';
import User from '../services/User.js';

export const createUser = (req, res) => {
  const { cel, password, name, document } = req.body;

  bcrypt.hash(password, 10).then(async (hash) => {
    const userAlreadyExists = await pool.exists(sql`
            select 1 from usuario where cpf_cnpj = ${document}
        `);

    if (userAlreadyExists) {
      return res
        .status(400)
        .json('Usuário com esse documento já está cadastrado');
    }

    await pool.query(sql`
        INSERT INTO usuario (telefone, senha, nome, cpf_cnpj)
        VALUES (${cel}, ${hash}, ${name}, ${document});
    `);

    res.status(200).json('Usuário cadastrado com sucesso!');
  });
};

export const getUserData = async (req, res) => {
  const { authorization } = req.headers;

  const user = await User.getFromToken(authorization);

  res.status(200).json({ user });
};
