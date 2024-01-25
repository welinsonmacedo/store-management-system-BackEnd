// src/index.js
const express = require('express');
const {Sequelize} = require('sequelize');
const cors = require('cors');
const produtoRoutes = require('./src/routes/produtosRoutes')
const ClientesRoutes = require ('./src/routes/clientesRoutes')
const config = require('./src/config/config');
const app = express();
const port = process.env.PORT || 3000;


const sequelize = new Sequelize(config.development);
app.use(cors());

app.use(express.json());


app.use('/produtos', produtoRoutes);
app.use('/clientes', ClientesRoutes)

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL.');
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
