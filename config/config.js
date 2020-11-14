const dotenv=require('dotenv')
dotenv.config()

module.exports={
  "development": {
    "username": "ahah12k",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "ahah12k.cafe24.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "ahah12k",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "ahah12k.cafe24.com",
    "dialect": "mysql"
  },
  "production": {
    "username": "ahah12k",
    "password": process.env.DB_PASSWORD,
    "database": "ahah12k",
    "host": "ahah12k.cafe24.com",
    "dialect": "mysql"
  }
}
