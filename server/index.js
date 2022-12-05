// const express = require('express')
// const cors = require('cors')
import mysql from "mysql2/promise";
import config from "./config.js";

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();

const app = express()

// app.use(cors())
// app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const port = 3001

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

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

app.get("/v8",async function (req,res)    {
  try {
      const connection = await mysql.createConnection(config.db)
      const[result,] = await connection.execute('select * from v8')
      
      if (!result) result=[]
      res.status(200).json(result)
  }   catch(err) {
      res.status(500).json({error: err.message})
  }
})

app.get("/v9",async function (req,res)    {
    try {
        const connection = await mysql.createConnection(config.db)
        const[result,] = await connection.execute('select * from v9')
        
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
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))