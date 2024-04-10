
const db = require('../database/config');

module.exports = {
  inserirUsuario: function(usuario, callback) {
    const sql = 'INSERT INTO usuario (nome,senha,telefone,endereco) VALUES (?, ?, ?, ?)';
    db.query(sql, [usuario.nome, usuario.senha, usuario.telefone, usuario.endereco], callback);
  },
  
  // Adicione outras funções conforme necessário, como buscarUsuarioPorEmail, atualizarUsuario, etc.
};




