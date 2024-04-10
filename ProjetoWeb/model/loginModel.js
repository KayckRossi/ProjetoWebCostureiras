const db = require('../database/config');

module.exports = {
  fazerLogin: function (nome, senha, callback) {
      db.query('SELECT * FROM usuario WHERE nome = ? AND senha = ?', [nome, senha], callback);
  },
  fazerLoginCostureira: function (nome, senha, callback) { // Adicionado
      db.query('SELECT * FROM usuario WHERE nome = ? AND senha = ? AND isAdmin = TRUE', [nome, senha], callback);
  },
  promoverAdmin: function (nome, callback) {
      db.query('UPDATE usuario SET isAdmin = TRUE WHERE nome = ?', [nome], callback);
  }
};
