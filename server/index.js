const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        res.status(200).send('KKonapa kkona')
    }   catch(err) {
        res.status(500).send(err.message)
    }
})

app.listen(port)