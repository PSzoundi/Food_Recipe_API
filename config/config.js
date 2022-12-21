const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('food_recipe_db', 'admin', '1234', {
    host: 'localhost',
    dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });




  module.exports = sequelize;