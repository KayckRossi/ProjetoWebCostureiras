const db = require('../database/config');

module.exports = {
  inserirCliente: function(usuario, callback) {
    const sql = 'INSERT INTO cliente (nome,telefone,endereco,medidas) VALUES (?, ?, ?, ?)';
    db.query(sql, [usuario.nome, usuario.telefone, usuario.medidas], callback);
  },
  
  // Adicione outras funções conforme necessário, como buscarUsuarioPorEmail, atualizarUsuario, etc.
};