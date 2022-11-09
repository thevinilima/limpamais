import { createPool } from 'slonik';
import { dbConfig } from './db.config.js';

const { user, password, host, port, database } = dbConfig;
const connectionStr = `postgres://${user}:${password}@${host}:${port}/${database}`;

const pool = await createPool(connectionStr, {
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
