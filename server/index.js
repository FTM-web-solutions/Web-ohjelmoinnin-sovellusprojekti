const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

//GET Visualizations here

app.get("/",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from hadcrut')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.get("/v5",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from v5')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.get("/v2",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from v2')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.listen(port)