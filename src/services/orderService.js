const orderRepository = require('../repositories/orderRepository');

// Função para criar um pedido
exports.createOrder = async (orderData) => {
  try {
    return await orderRepository.create(orderData);
  } catch (error) {
    throw new Error('Erro ao criar pedido: ' + error.message);
  }
};

// Função para buscar todos os pedidos
exports.getAllOrders = async () => {
  try {
    return await orderRepository.findAll();
  } catch (error) {
    throw new Error('Erro ao buscar pedidos: ' + error.message);
  }
};

// Função para contar o número total de pedidos
exports.getOrderCount = async () => {
  try {
    return await orderRepository.count();
  } catch (error) {
    throw new Error('Erro ao contar pedidos: ' + error.message);
  }
};

// Função para buscar um pedido por ID
exports.getOrderById = async (orderId) => {
  try {
    return await orderRepository.findById(orderId);
  } catch (error) {
    throw new Error('Erro ao buscar pedido por ID: ' + error.message);
  }
};

// Função para buscar pedidos por status
exports.getOrderByStatus = async (status) => {
  try {
    return await orderRepository.findByStatus(status);
  } catch (error) {
    throw new Error('Erro ao buscar pedidos por status: ' + error.message);
  }
};

// Função para atualizar um pedido
exports.updateOrder = async (orderId, updateData) => {
  try {
    return await orderRepository.update(orderId, updateData);
  } catch (error) {
    throw new Error('Erro ao atualizar pedido: ' + error.message);
  }
};

// Função para remover um pedido
exports.removeOrder = async (orderId) => {
  try {
    return await orderRepository.remove(orderId);
  } catch (error) {
    throw new Error('Erro ao remover pedido: ' + error.message);
  }
};
