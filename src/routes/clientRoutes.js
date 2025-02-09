const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// ✅ Ordem correta das rotas
router.get('/count', clientController.countClients); // Conta os clientes
router.get('/', clientController.getAllClients); // Lista todos os clientes
router.get('/:id', clientController.getClientById); // Busca cliente por ID
router.get('/name/:name', clientController.getClientByName); // Busca cliente por nome
router.post('/', clientController.createClient); // Cria novo cliente
router.put('/:id', clientController.updateClient); // Atualiza cliente
router.delete('/:id', clientController.deleteClient); // Deleta cliente

module.exports = router;


