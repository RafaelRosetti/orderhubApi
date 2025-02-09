const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('client', { // Nome definido em minúsculas para corresponder ao PostgreSQL
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'clients', // Definido para corresponder ao PostgreSQL
  timestamps: true
});

module.exports = Client;
