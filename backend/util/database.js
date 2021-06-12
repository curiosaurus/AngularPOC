const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'pratik', '12345678', {
  host: 'localhost',
  dialect: 'mssql',
  port:"1433"
});

module.exports = sequelize;
