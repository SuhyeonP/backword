const dotenv=require('dotenv')
dotenv.config()

module.exports={
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "3.36.1.32",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
