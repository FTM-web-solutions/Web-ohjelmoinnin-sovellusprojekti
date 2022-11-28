const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const todos = require('./services/todos');
const users = require('./services/users');

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

app.get("/v6",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from v6')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.get("/v3",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from v3')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.get("/v7",async function (req,res)    {
  try {
      const connection = await mysql.createConnection(config.db)
      const[result,] = await connection.execute('select * from v7')
      
      if (!result) result=[]
      res.status(200).json(result)
  }   catch(err) {
      res.status(500).json({error: err.message})
  }
})


app.get("/v4",async function (req,res)    {
  try {
      const connection = await mysql.createConnection(config.db)
      const[result,] = await connection.execute('select * from v4')
      
      if (!result) result=[]
      res.status(200).json(result)
  }   catch(err) {
      res.status(500).json({error: err.message})
  }
})

app.get("/user",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from usertable')
        
        if (!result) result=[]
        res.status(200).json(result)
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
})