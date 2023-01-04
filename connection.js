const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_test',
    password: 'postgres',
    port: 5432,
})

module.exports = pool