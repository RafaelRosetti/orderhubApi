const { Order } = require('../models'); // Importando o modelo de Order

// Função para criar um pedido
exports.create = async (orderData) => {
  return await Order.create(orderData);
};

// Função para buscar todos os pedidos
exports.findAll = async () => {
  return await Order.findAll();
};

// Função para contar o número total de pedidos
exports.count = async () => {
  return await Order.count();
};

// Função para buscar um pedido por ID
exports.findById = async (id) => {
  return await Order.findByPk(id);
};

// Função para buscar pedidos por status (Exemplo)
exports.findByStatus = async (status) => {
  return await Order.findAll({
    where: { status }
  });
};

// Função para atualizar um pedido
exports.update = async (id, updateData) => {
  return await Order.update(updateData, { where: { id } });
};

// Função para remover um pedido
exports.remove = async (id) => {
  return await Order.destroy({ where: { id } });
};
