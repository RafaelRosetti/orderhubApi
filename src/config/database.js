const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,    // Nome do banco de dados
  process.env.DB_USER,    // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST,  // Host do banco
    dialect: 'postgres',        // Tipo de banco de dados
    logging: console.log,       // Log das queries (remova se não quiser ver no terminal)
  }
);

module.exports = sequelize; // Exportando o Sequelize corretamente
