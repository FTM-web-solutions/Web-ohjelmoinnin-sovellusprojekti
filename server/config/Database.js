import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize} from "sequelize";

const db = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
    dialect: process.env.DB_DIALECT,
    host: process.env.GAE_DB_SOCKET,
    dialectOptions: {
        socketPath: process.env.GAE_DB_SOCKET,
    },
    logging: false,
    operatorsAliases: false  
});

export default db;