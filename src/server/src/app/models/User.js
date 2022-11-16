import jwt from 'jsonwebtoken';
import { sql } from 'slonik';
import pool from '../../configs/db/index.js';

const User = {
  getByTel: async (telefone) => {
    if (!telefone) return null;

    try {
      const user = await pool.one(sql`
        select telefone, nome, cpf_cnpj
        from usuario
        where telefone = ${telefone};
      `);

      return user;
    } catch (e) {
      return null;
    }
  },
  getFromToken: async (headerToken) => {
    const token = headerToken.split(' ')[1];
    const { telefone } = jwt.verify(token, process.env.JWT_SECRET);
    return await User.getByTel(telefone);
  },
};

export default User;
