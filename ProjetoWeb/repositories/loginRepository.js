const db = require('../database/config');

module.exports = {
  fazerLogin: function (nome, senha, callback) {
      // Consulta no banco de dados para verificar se o nome de usuário e a senha correspondem
      db.query('SELECT * FROM usuario WHERE nome = ? AND senha = ?', [nome, senha], callback);
  }
};
