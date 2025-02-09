const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// ⚠️ ROTAS FIXAS DEVEM VIR ANTES DE ROTAS COM PARÂMETROS
router.get('/count', productController.countProducts); // ✅ Conta os produtos
router.get('/', productController.getAllProducts); // ✅ Retorna todos os produtos
router.get('/:id', productController.getProductById); // ✅ Busca por ID
router.get('/name/:name', productController.getProductByName); // ✅ Busca por nome
router.post('/', productController.createProduct); // ✅ Cria produto
router.put('/:id', productController.updateProduct); // ✅ Atualiza produto
router.delete('/:id', productController.deleteProduct); // ✅ Deleta produto

module.exports = router;
