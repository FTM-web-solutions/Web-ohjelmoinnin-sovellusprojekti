import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    client: process.env.DB_DIALECT, //create .env file and give values for these client, user, password etc.
    db: {
        user: process.env.DB_USER,
        password: process.env.GDB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
};

if (process.env.NODE_ENV == "production") { //if in production get socketpath value from .env if running locally set host values to localhost
    config.db.socketPath = process.env.GAE_DB_SOCKET;
}else{
    config.db.host = "localhost"; //use this if running locally
}



export default config;