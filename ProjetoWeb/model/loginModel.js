const db = require('../database/config');

module.exports = {
    fazerLogin: function (nome, senha, callback) {
        db.query('SELECT * FROM cliente WHERE nome_cliente = ? AND senha = ?', [nome, senha], callback);
    },
    fazerLoginCostureira: function (nome, senha, callback) {
        db.query('SELECT * FROM usuario WHERE nome = ? AND senha = ?', [nome, senha], callback);
    },
};
