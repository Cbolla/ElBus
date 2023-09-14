// Importe a função de criação de conexão do arquivo "conexao.js"
const createConnection = require('./conexao');

async function login(name, password) {
  const connection = await createConnection(); // Crie uma conexão com o banco de dados

  try {
    // Consulte o banco de dados para verificar as credenciais
    const [rows] = await connection.query('SELECT * FROM usuario WHERE name = ? AND password = ?', [name, password]);

    if (rows.length === 1) {
      return true; // Usuário e senha válidos
    } else {
      return false; // Credenciais inválidas
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  } finally {
    connection.end(); // Encerre a conexão com o banco de dados
  }
}

module.exports = { login };
