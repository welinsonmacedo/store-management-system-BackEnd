const Clientes = require('../models/clientesModel');

module.exports = {
  async ListClientes( res) { 
    try {
      const clientes = await Clientes.findAll(); 
      res.status(200).json(clientes);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      res.status(500).json({ erro: 'Erro ao buscar clientes.' });
    }
  },
};
