require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Importando a configuração de banco de dados

const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Log de tentativa de conexão com o banco de dados
console.log('Tentando conectar ao banco de dados...');

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

app.use(cors());
app.use(express.json());

app.use('/clients', clientRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('OrderHubAPI está rodando!');
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
