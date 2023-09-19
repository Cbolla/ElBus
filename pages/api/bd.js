const pgp = require('pg-promise')();

let db; // Declare uma variável para armazenar a conexão

if (!db) {
  db = pgp({
    connectionString: 'postgres://postgres:Psw141116@@@localhost:5432/elbus'
  });
}

module.exports = db; // Exporte a conexão
