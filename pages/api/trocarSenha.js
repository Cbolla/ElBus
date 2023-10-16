import bd from './bd';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, senhaAtual, novaSenha } = req.body;
    // Adicione um console.log para verificar o email antes da consulta
    console.log('Email fornecido:', email);

    try {
      // Consulte o banco de dados para obter a senha atual
      const query = 'SELECT password FROM usuarios WHERE email = $1';
      const result = await bd.query(query, [email]);

      if (result && result.rows && result.rows.length === 1) {
        const { senha } = result.rows[0];

        // Verifique se a senha atual fornecida corresponde à senha no banco de dados
        if (senha === senhaAtual) {
          // Atualize a senha no banco de dados para a nova senha
          const updateQuery = 'UPDATE usuarios SET senha = $1 WHERE email = $2';
          await bd.query(updateQuery, [novaSenha, email]);

          return res.status(200).json({ message: 'Senha atualizada com sucesso' });
        } else {
          return res.status(400).json({ error: 'Senha atual incorreta' });
        }
      } else {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao trocar a senha:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
};
