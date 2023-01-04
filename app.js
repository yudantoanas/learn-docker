const pool = require('./connection')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/test', (req, res) => {
    pool.query('select now()', (err, result) => {
        res.send(result.rows)
    })
})

app.listen(port, () => {
    console.log('nyala bos!');
})