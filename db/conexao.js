const mysql = require('mysql2/promise');
const dotenv = require('dotenv'); // Importe a biblioteca dotenv

// Configurações de conexão
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
};

// Função para criar e retornar a conexão com o banco de dados
async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
  } catch (error) {
    console.error('Erro ao criar a conexão com o banco de dados:', error);
    throw error;
  }
}

module.exports = createConnection;
