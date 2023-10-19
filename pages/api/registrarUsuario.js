
import bd from './bd';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); 
  }

  const { name, email, password } = req.body;

  try {
   
    const existingUser = await bd.oneOrNone('SELECT * FROM usuarios WHERE email = $1', email);

    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado' });
    }


    await bd.none('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);

    return res.status(200).json({ message: 'Registro bem-sucedido' });
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error);
    return res.status(500).json({ message: 'Erro no servidor ao registrar o usuário' });
  }
}
