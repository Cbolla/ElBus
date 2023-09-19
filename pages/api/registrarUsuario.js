// Importe o pacote 'pg-promise' e configure sua conexão com o banco de dados
import bd from './bd';

// Defina a rota para registrar um novo usuário
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido (não é um POST)
  }

  const { name, email, password } = req.body;

  try {
    // Verifique se o email já está registrado (você pode adaptar isso ao seu esquema de banco de dados)
    const existingUser = await bd.oneOrNone('SELECT * FROM usuarios WHERE email = $1', email);

    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado' });
    }

    // Insira o novo usuário no banco de dados (sem criptografia)
    await bd.none('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);

    return res.status(200).json({ message: 'Registro bem-sucedido' });
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error);
    return res.status(500).json({ message: 'Erro no servidor ao registrar o usuário' });
  }
}
