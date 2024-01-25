const { Sequelize, DataTypes } = require('sequelize');
const Config = require('../config/config');

const sequelize = new Sequelize(Config.development);

const Produto = sequelize.define('Produto', {
 
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Produto;
