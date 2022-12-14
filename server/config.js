import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    client: process.env.DB_DIALECT,
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
};

// if (process.env.NODE_ENV == "production") {
    config.db.socketPath = process.env.GAE_DB_SOCKET;
// }else{
//     config.db.host = "localhost";
// }



export default config;