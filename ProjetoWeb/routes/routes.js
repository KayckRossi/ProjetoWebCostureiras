const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para a página de cadastro
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'cadastro.html'));
});

module.exports = router;
