const { Sequelize, DataTypes } = require('sequelize');
const Config = require('../config/config');

const sequelize = new Sequelize(Config.development);

const Clientes = sequelize.define('Clientes', {
 
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
  }
});

module.exports = Clientes;
