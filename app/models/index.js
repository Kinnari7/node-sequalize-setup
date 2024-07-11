const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.modal.js")(sequelize, Sequelize);

module.exports = db;