import bd from './bd';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { email } = req.query;

    try {
      // Execute a consulta SQL para obter o nome de usuário com base no email
      const query = 'SELECT name FROM usuarios WHERE email = $1';
      const result = await bd.query(query, [email]);


      if (result && result.rows && result.rows.length === 1) {
        const { name } = result.rows[0]; // Acesse o nome dentro do objeto
        res.status(200).json({ name });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
      
    } catch (error) {
      console.error('Erro ao buscar nome de usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
