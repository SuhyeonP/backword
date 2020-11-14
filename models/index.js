const Sequelize = require('sequelize');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.REACT_SVT_ADMIN=require('./admin')(sequelize,Sequelize)
db.REACT_SVT_ALBUM=require('./album')(sequelize,Sequelize)
db.REACT_SVT_IMAGE=require('./image')(sequelize,Sequelize)
db.REACT_SVT_GOING=require('./going')(sequelize,Sequelize)
db.REACT_SVT_MEMBER=require('./member')(sequelize,Sequelize)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;