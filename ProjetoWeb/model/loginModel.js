const db = require('../database/config');

module.exports = {
    fazerLogin: function (nome, senha, callback) {
        console.log(`Consulta de login para cliente: ${nome}`);
        db.query('SELECT * FROM cliente WHERE nome_cliente = ? AND senha = ?', [nome, senha], (err, result) => {
            if (err) {
                console.error('Erro na consulta de login para cliente:', err);
            } else {
                console.log('Resultado da consulta de login para cliente:', result);
            }
            callback(err, result);
        });
    },
    fazerLoginCostureira: function (nome, senha, callback) {
        console.log(`Consulta de login para costureira: ${nome}`);
        db.query('SELECT * FROM usuario WHERE nome = ? AND senha = ?', [nome, senha], (err, result) => {
            if (err) {
                console.error('Erro na consulta de login para costureira:', err);
            } else {
                console.log('Resultado da consulta de login para costureira:', result);
            }
            callback(err, result);
        });
    },
};
