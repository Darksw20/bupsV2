'use_strict'
const { Pool, Client } = require('pg');

const env = {
    production: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
          },
    },
    development: {
        user: process.env.DEV_USER,
        host: process.env.DEV_DB_HOST,
        database: process.env.DEV_DB_NAME,
        password: process.env.DEV_DB_PASS,
        port: 5432
    }
}
var working_environment =
    process.env.NODE_ENV === 'development' ?
    env.development : env.production;

const client = new Client(working_environment)

module.exports = client;