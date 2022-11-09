import express from 'express';
import { sql } from 'slonik';
import pool from './src/configs/db/index.js';

const app = express();

// just testing db, remove after
app.use('/test', async (_, res) => {
  const result = await pool.query(sql`
    create table test (
      id serial,
      name varchar(255)
    )`);

  res.json({ result }).end();
});

export default app;
