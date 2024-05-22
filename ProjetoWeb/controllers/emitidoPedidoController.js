  const pedidoModel = require('../model/emitidoPedidoModel.js');

  module.exports = {
    obterPedidosEmitidos: function(req, res) {
        pedidoModel.obterPedidosEmitidos((err, pedidos) => {
            if (err) {
                console.error('Erro ao obter pedidos emitidos:', err);
                res.status(500).send('Erro interno do servidor');
            } else {
                res.json(pedidos);
            }
        });
    }
  };
