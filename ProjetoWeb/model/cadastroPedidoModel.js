const db = require('../database/config');

// Método para obter os produtos do banco de dados
exports.obterProdutos = function(callback) {
  const query = 'SELECT * FROM produto'; // Query para selecionar todos os produtos

  // Execute a consulta no banco de dados
  db.query(query, function(err, results) { // Alteração aqui para usar db.query
    if (err) {
      callback(err, null); // Se houver um erro, retorne-o para o controlador
    } else {
      callback(null, results); // Se não houver erro, retorne os resultados para o controlador
    }
  });
};
