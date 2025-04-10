const { Pool } = require('pg'); // Destructure Pool from pg

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Corrected spelling
  database: 'dbmj56',
  password: 'admin',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
