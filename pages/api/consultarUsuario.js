const bd = require('./bd'); 

async function handler(req, res) {
  try {
    
    const usuarios = await bd.any('SELECT * FROM usuarios');
    
    
    console.log('Dados da consulta:', usuarios);
    
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ error: 'Erro na consulta' });
  }
}

module.exports = handler;
