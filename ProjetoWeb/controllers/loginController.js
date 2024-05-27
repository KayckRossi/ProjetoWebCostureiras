const loginModel = require('../model/loginModel');

module.exports = {
    fazerLogin: function (req, res) {
        const nome = req.body.nome;
        const senha = req.body.senha;

        console.log(`Tentativa de login para cliente: ${nome}`);

        loginModel.fazerLogin(nome, senha, (err, result) => {
            if (err) {
                console.error('Erro ao fazer login:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                if (result.length > 0) {
                    req.session.clienteId = result[0].id_cliente;
                    console.log('Login de cliente bem-sucedido:', req.session.clienteId);
                    res.status(200).send('success');
                } else {
                    console.log('Login de cliente falhou');
                    res.status(200).send('failure');
                }
            }
        });
    },

    fazerLoginCostureira: function (req, res) {
        const nome = req.body.nome;
        const senha = req.body.senha;

        console.log(`Tentativa de login para costureira: ${nome}`);

        loginModel.fazerLoginCostureira(nome, senha, (err, result) => {
            if (err) {
                console.error('Erro ao fazer login:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                console.log('Resultado da consulta para costureira:', result);
                if (result.length > 0) {
                    req.session.usuarioId = result[0].id_usuario;
                    console.log('Login de costureira bem-sucedido:', req.session.usuarioId);
                    res.status(200).send('success-admin');
                } else {
                    console.log('Login de costureira falhou');
                    res.status(200).send('failure');
                }
            }
        });
    },
};
