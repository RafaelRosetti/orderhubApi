const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// ✅ Ordem correta das rotas
router.get('/count', orderController.countOrders); // Conta os pedidos
router.get('/', orderController.getAllOrders); // Lista todos os pedidos
router.get('/:id', orderController.getOrderById); // Busca pedido por ID
router.post('/', orderController.createOrder); // Cria novo pedido
router.put('/:id', orderController.updateOrder); // Atualiza pedido
router.delete('/:id', orderController.deleteOrder); // Deleta pedido

module.exports = router;
