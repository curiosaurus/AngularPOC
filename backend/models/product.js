const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  category:{
    type: Sequelize.STRING,
    allowNull:false
  },
  // categoryId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references:{
  //     model: 'category',
  //     key:'id'
  //   }
  // },
  image: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Product;
