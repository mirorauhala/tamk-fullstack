const mysql = require("mysql");

// https://en.wikipedia.org/wiki/Connection_pool
module.exports = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});
