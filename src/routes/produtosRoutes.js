const express = require('express');
const produtoController = require('../controllers/produtoController');
const buscarProdutoController = require ( '../controllers/buscarProdutoController.js')
const router = express.Router();

router.post('/cadastrar', produtoController.cadastrarProduto);
router.get('/listarProdutos', (req, res) => buscarProdutoController.listarProdutos(res));


module.exports = router;