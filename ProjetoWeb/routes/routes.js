const express = require('express');
const path = require('path');
const router = express.Router();

const cadastroClienteController = require('../controllers/cadastroClienteController.js');
const cadastroUsuarioAdmController = require('../controllers/cadastrarUsuarioAdmController.js');
const loginController = require('../controllers/loginController');
const pedidoController = require('../controllers/cadastroPedidoController.js');


router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'login.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'homepage.html'));
});

router.get('/cadastroCliente', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'cadastroCliente.html'));
});

router.get('/cadastroUsuario', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'cadastroUsuarioAdm.html'));
});

router.get('/cadastroPedido', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'cadastroDePedidos.html'));
});

router.get('/manutencaoPedido', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'manutencaoPedidos.html'));
});

router.get('/manutencaoCliente', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'manutencaoCliente.html'));
});

router.get('/emitidos', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'pedidosEmitidos.html'));
});

router.get('/emitidosCliente', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'view', 'pedidosEmitidosCliente.html'));
});

router.get('/bemvindo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'bemvindo.html'));
});

router.get('/sobrenos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'sobre.html'));
});


// Rota para lidar com o formulário de cadastro (método POST)
router.post('/cadastroCliente', cadastroClienteController.cadastrarCliente);

router.post('/cadastroUsuario',cadastroUsuarioAdmController.cadastrarUsuario)

router.post('/login', loginController.fazerLogin);

// Rota para obter a lista de produtos
router.get('/produtos', pedidoController.obterProdutos);

module.exports = router;
