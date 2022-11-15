import { sql } from 'slonik';
import pool from '../../configs/db/index.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export const createUser = (req, res) => {
  const {
    cel,
    password,
    name,
    document,
    cep,
    address,
    number,
    additional_address,
    neighbor,
    city,
    uf,
  } = req.body;

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
        INSERT INTO usuario (telefone, senha, nome, cpf_cnpj, cep, logradouro, numero, complemento, bairro, cidade, uf)
        VALUES (${cel}, ${hash}, ${name}, ${document}, ${cep}, ${address}, ${number}, ${additional_address}, ${neighbor}, ${city}, ${uf});`);

    res.status(200).json('Usuário cadastrado com sucesso!');
  });
};

export const getUserData = async (req, res) => {
  const { verify } = jsonwebtoken;
  const { token } = req.headers;
  const hashSplited = token.split(' ')[1];

  const { sub } = verify(hashSplited, process.env.JWT_SECRET);

  const userTel = sub;

  const userData = await pool.one(sql`
    select telefone, nome, cpf_cnpj, cep, logradouro, numero, complemento, bairro, cidade, uf from usuario where telefone = ${userTel}
    `);

  res.status(200).json({ userData });
};
