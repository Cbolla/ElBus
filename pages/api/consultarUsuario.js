const bd = require('./bd'); // Importe o módulo de banco de dados que você criou

async function handler(req, res) {
  try {
    // Realize a consulta usando o módulo de banco de dados
    const usuarios = await bd.any('SELECT * FROM usuario');
    
    // Imprima os dados no console
    console.log('Dados da consulta:', usuarios);
    
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ error: 'Erro na consulta' });
  }
}

module.exports = handler; // Exporte a função handler
