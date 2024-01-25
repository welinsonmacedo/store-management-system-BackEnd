const express = require('express');
const listClientesController = require('../controllers/listClientesController');
const cadastroClientesController = require ('../controllers/cadastroClientesController')
const router = express.Router();


router.get('/listclientes', (req, res) => listClientesController.ListClientes(res));
router.post('/cadastrar',cadastroClientesController.cadastrarCliente);


module.exports = router;
