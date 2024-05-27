import bd from './bd';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido (não é um POST)
  }

  const { reclame_titulo, reclame_texto } = req.body;

  try {
    // Insere a nova reclamação no banco de dados
    await bd.none('INSERT INTO reclame_aqui (reclame_titulo, reclame_texto) VALUES ($1, $2)', [reclame_titulo, reclame_texto]);

    return res.status(201).json({ message: 'Reclamação registrada com sucesso' }); // Criado com sucesso
  } catch (error) {
    console.error('Erro ao registrar reclamação:', error);
    return res.status(500).json({ message: 'Erro ao registrar reclamação' });
  }
}
