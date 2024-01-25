const  Clientes  = require('../models/clientesModel');  

const cadastrarCliente = async (req, res) => {
  const { nome, cpf, endereco, telefone } = req.body;

  try {
    const novoCliente = await Clientes.create({ nome, cpf, endereco, telefone });
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  cadastrarCliente
};
