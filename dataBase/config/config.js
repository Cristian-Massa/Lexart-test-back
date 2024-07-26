const fs = require('fs');

module.exports = {
  development: {
    url: process.env.DB_URL,
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      encrypt: true,
      ssl : {
        rejectUnauthorized: false
      }
    },
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'postgres',
    dialectOptions: {
      encrypt: true,
      ssl : {
        rejectUnauthorized: false
      }
    },
  },
  production: {
    url: process.env.DB_URL,
    // username: process.env.PROD_DB_USERNAME,
    // password: process.env.PROD_DB_PASSWORD,
    // database: process.env.PROD_DB_NAME,
    // host: process.env.PROD_DB_HOSTNAME,
    // port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    },
    dialectOptions: {
      encrypt: true,
      ssl : {
        rejectUnauthorized: false
      }
    },
};