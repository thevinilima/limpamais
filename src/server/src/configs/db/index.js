const { Pool } = require('pg');
const dbConfig = require('./db.config');

const { user, password, host, port, database } = dbConfig;

const pool = new Pool({
  host,
  user,
  password,
  database,
  port,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
