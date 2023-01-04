const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.USER,
    host: 'database',
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: 5432,
})

module.exports = pool