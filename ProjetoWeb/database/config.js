// database/config.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Banco_costureira',
  port: 3307 
});

connection.connect();

module.exports = connection;
