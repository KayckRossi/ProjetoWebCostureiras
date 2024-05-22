const clienteManuModel = require('../model/clienteManuModel');

module.exports = {
  buscarCliente: (req, res) => {
    const clienteId = req.params.id;
    clienteManuModel.buscarCliente(clienteId, (err, results) => {
      if (err) {
        console.error('Erro ao buscar cliente:', err);
        res.status(500).send('Erro interno do servidor');
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).send('Cliente não encontrado');
        }
      }
    });
  },

  atualizarCliente: (req, res) => {
    const clienteId = req.params.id;
    const { nome_cliente, telefone, endereco } = req.body;

    // Adicione logs para verificar os dados recebidos
    console.log('Dados recebidos para atualização:', { nome_cliente, telefone, endereco });

    clienteManuModel.atualizarCliente(clienteId, nome_cliente, telefone, endereco, (err, result) => {
      if (err) {
        console.error('Erro ao atualizar cliente:', err);
        res.status(500).send('Erro interno do servidor');
      } else {
        res.send('Cliente atualizado com sucesso');
      }
    });
  },

  excluirCliente: (req, res) => {
    const clienteId = req.params.id;
    clienteManuModel.excluirCliente(clienteId, (err, result) => {
      if (err) {
        console.error('Erro ao excluir cliente:', err);
        res.status(500).send('Erro interno do servidor');
      } else {
        res.send('Cliente excluído com sucesso');
      }
    });
  }
};
