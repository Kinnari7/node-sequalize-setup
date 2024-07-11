const config = {};

    config.HOST = "localhost";
    config.USER ="root";
    config.PASSWORD = "admin123";
    config.DB = "test";
    config.dialect = "mysql";
    config.pool = {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
module.exports = config;