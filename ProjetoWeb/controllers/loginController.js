const loginModel = require('../model/loginModel');

module.exports = {
    fazerLogin: function (req, res) {
        const nome = req.body.nome;
        const senha = req.body.senha;

        loginModel.fazerLogin(nome, senha, (err, result) => {
            if (err) {
                console.error('Erro ao fazer login:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                if (result.length > 0) {
                    req.session.clienteId = result[0].id_cliente;
                    console.log(req.session.clienteId); // Correção aqui
                    res.status(200).send('success');
                } else {
                    res.status(200).send('failure');
                }
            }
        });
    },

    fazerLoginCostureira: function (req, res) {
        const nome = req.body.nome;
        const senha = req.body.senha;
    
        loginModel.fazerLoginCostureira(nome, senha, (err, result) => {
            if (err) {
                console.error('Erro ao fazer login:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                if (result.length > 0) {
                    req.session.usuarioId = result[0].id_usuario; // Armazena o ID do usuário na sessão
                    res.status(200).send('success-admin');
                } else {
                    res.status(200).send('failure');
                }
            }
        });
    },
};
