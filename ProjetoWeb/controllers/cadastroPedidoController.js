cadastroPedidoModel = require('../model/cadastroPedidoModel');

exports.obterProdutos = function(req, res) {
  // Chame o método do modelo para obter os produtos do banco de dados
  cadastroPedidoModel.obterProdutos(function(err, produtos) {
    if (err) {
      console.error('Erro ao obter os produtos:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.json(produtos); // Envie os produtos como uma resposta JSON
    }
  });
};