const express = require('express');
const path = require('path');
const router = express.Router();
const cadastroClienteController = require('../controllers/criarContaClienteController.js');
const cadastroUsuarioController = require('../controllers/cadastroNovoUsuarioController.js');
const loginController = require('../controllers/loginController');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'login.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'homepage.html'));
});

router.get('/cadastroUsuario', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'cadastroNovoUsuario.html'));
});

router.get('/cadastroCliente', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'cadastroClienteAdm.html'));
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

router.get('/bemvindo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'bemvindo.html'));
});

router.get('/sobrenos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'sobre.html'));
});


// Rota para lidar com o formulário de cadastro (método POST)
router.post('/cadastroCliente', cadastroClienteController.cadastrarCliente);

router.post('/cadastroUsuarioAdm',cadastroUsuarioController.cadastrarUsuario)

router.post('/login', loginController.fazerLogin);

module.exports = router;
