import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize} from "sequelize";

const db = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.GDB_PASSWORD,
    {
    dialect: process.env.DB_DIALECT,
    host: process.env.GAE_DB_SOCKET, //if running locally set this to http://localhost:3000 and comment from 12 to 16
    dialectOptions: {                           
        socketPath: process.env.GAE_DB_SOCKET,  
    },
    logging: false,                             
    operatorsAliases: false                     
});

export default db;