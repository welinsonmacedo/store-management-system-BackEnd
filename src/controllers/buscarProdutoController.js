// produtoController.js

const  Produto  = require('../models/produtoModel'); // Importe seu modelo de Produto

module.exports = {
  async listarProdutos( res) {
    try {
      const produtos = await Produto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      res.status(500).json({ erro: 'Erro ao buscar produtos.' });
    }
  },
  // Outros métodos do controlador, se necessário...
};
