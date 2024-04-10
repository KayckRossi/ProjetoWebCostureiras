const loginRepository = require('../repositories/loginRepository');

module.exports = {
    fazerLogin: function (req, res) {
        // Captura os dados do formulário
        const nome = req.body.nome;
        const senha = req.body.senha;

        // Chama o método do repositório para fazer o login
        loginRepository.fazerLogin(nome, senha, (err, result) => {
            if (err) {
                console.error('Erro ao fazer login:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                if (result.length > 0) {
                    // Se o nome de usuário e a senha estiverem corretos, retorna 'success'
                    res.status(200).send('success');
                } else {
                    // Se não houver correspondência no banco de dados, retorna 'failure'
                    res.status(200).send('failure');
                }
            }
        });
    }
};
