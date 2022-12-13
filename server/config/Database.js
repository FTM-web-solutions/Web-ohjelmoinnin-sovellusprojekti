import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize} from "sequelize";

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: process.env.DB_DIALECT,
});

if (process.env.NODE_ENV == "production") {
    db.socketPath = process.env.GAE_DB_SOCKET;
}else{
    db.host = process.env.DB_HOST;
}

export default db;