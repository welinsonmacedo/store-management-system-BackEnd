const  Produto  = require('../models/produtoModel');

const cadastrarProduto = async (req, res) => {
  const { nome, descricao, preco } = req.body;

  try {
    console.log('Produto Model:', Produto);
    const novoProduto = await Produto.create({ nome, descricao, preco });
    res.status(201).json(novoProduto);
  } catch (error) {
    console.error('Erro ao cadastrar produto: CATCH', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  cadastrarProduto,
};
