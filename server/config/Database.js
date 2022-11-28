import {Sequelize} from "sequelize";

const db = new Sequelize('climate','root','root',{
    host: "localhost",
    dialect: "mysql"
});

export default db;