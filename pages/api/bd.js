const pgp = require('pg-promise')();
const db = pgp({
  connectionString: 'postgres://postgres:Psw141116@@@localhost:5432/elbus'
});

module.exports = db;
