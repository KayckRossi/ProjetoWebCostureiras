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
                    // Se o nome de usuário e a senha estiverem corretos, verifica se o usuário é um administrador
                    if (result[0].isAdmin) {
                        res.status(200).send('success-admin');
                    } else {
                        res.status(200).send('success');
                    }
                } else {
                    res.status(200).send('failure');
                }
            }
        });
    },
    
    promoverAdmin: function (req, res) {
        const nome = req.body.nome;

        loginModel.promoverAdmin(nome, (err, result) => {
            if (err) {
                console.error('Erro ao promover usuário:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                res.status(200).send('Usuário promovido a administrador com sucesso');
            }
        });
    }
};
