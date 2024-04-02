const express = require('express');
const path = require('path');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'home.html'));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'cadastro.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'login.html'));
});

// Rota para lidar com o formulário de cadastro (método POST)
router.post('/cadastro', cadastroController.cadastrarUsuario);

module.exports = router;
