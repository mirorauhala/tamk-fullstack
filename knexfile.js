// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "tamk",
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: process.env.DATABASE_DATABASE,
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
