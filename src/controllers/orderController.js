const { Order } = require('../models/order'); // Assumindo que você tenha o modelo Order configurado com Sequelize

// Contar o total de pedidos
exports.countOrders = async (req, res) => {
  try {
    const count = await Order.count();
    res.status(200).json({ totalOrders: count });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao contar os pedidos', error: error.message });
  }
};

// Listar todos os pedidos
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedidos', error: error.message });
  }
};

// Buscar um pedido por ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedido', error: error.message });
  }
};

// Criar um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const { clientId, productIds, status, totalAmount } = req.body; // Assumindo que você tenha uma estrutura de pedido que inclui clientId e productIds
    const newOrder = await Order.create({ clientId, productIds, status, totalAmount });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error: error.message });
  }
};

// Atualizar um pedido
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    const { clientId, productIds, status } = req.body;
    await order.update({ clientId, productIds, status });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pedido', error: error.message });
  }
};

// Deletar um pedido
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    await order.destroy();
    res.status(200).json({ message: 'Pedido deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar pedido', error: error.message });
  }
};
