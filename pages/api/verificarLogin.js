// pages/api/verificarLogin.js
import bd from './bd';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido (não é um POST)
  }

  const { login, senha } = req.body;

  try {
    // Consulta o banco de dados para verificar o login e senha
    const resultado = await bd.oneOrNone('SELECT * FROM usuarios WHERE login = $1 AND senha = $2', [login, senha]);

    if (resultado) {
      // Usuário autenticado com sucesso
      return res.status(200).json({ message: 'Autenticado com sucesso' });
    } else {
      // Usuário não encontrado ou credenciais incorretas
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro na verificação de login:', error);
    return res.status(500).json({ message: 'Erro na verificação de login' });
  }
}
