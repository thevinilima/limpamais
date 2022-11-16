import { sql } from 'slonik';
import pool from '../../configs/db/index.js';

const Service = {
  create: async ({ desc, dateTime, rooms, value, address }, userTel) => {
    const createdServiceNumber = await pool.oneFirst(sql`
      insert into cria_servico (telefone_usuario)
      values (${userTel})
      returning num_servico;
    `);

    const service = await pool.one(sql`
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
      values (
        ${createdServiceNumber},
        ${desc},
        ${dateTime},
        ${rooms},
        ${value},
        ${address.cep},
        ${address.logradouro},
        ${address.numero},
        ${address.complemento},
        ${address.bairro},
        ${address.cidade},
        ${address.uf}
      )
      returning *;
    `);

    return service;
  },
};

export default Service;
