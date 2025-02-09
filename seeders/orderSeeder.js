const { Order } = require('../models'); // Ajuste conforme seu caminho de modelos

const orders = [
  { clientId: 1, totalAmount: 300.0 },
  { clientId: 2, totalAmount: 450.0 },
  { clientId: 3, totalAmount: 200.0 }
];

async function seedOrders() {
  try {
    await Order.bulkCreate(orders); // Insere múltiplos registros
    console.log('Pedidos inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir pedidos:', error);
  }
}

seedOrders();

