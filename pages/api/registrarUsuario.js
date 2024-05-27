// pages/api/registrarUsuario.js
import bd from './bd';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido (não é um POST)
  }

  const { name, email, password } = req.body;

  try {
    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = await bd.oneOrNone('SELECT * FROM usuario WHERE email = $1', [email]);

    if (usuarioExistente) {
      return res.status(409).json({ message: 'E-mail já cadastrado' }); // Conflito (e-mail já existe)
    }

    // Insere o novo usuário no banco de dados
    await bd.none('INSERT INTO usuario (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);

    return res.status(201).json({ message: 'Usuário registrado com sucesso' }); // Criado com sucesso
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
}
