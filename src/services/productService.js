const productRepository = require('../repositories/productRepository');

// Função para criar um produto
exports.createProduct = async (productData) => {
  try {
    return await productRepository.create(productData);
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
};

// Função para buscar todos os produtos
exports.getAllProducts = async () => {
  try {
    return await productRepository.findAll();
  } catch (error) {
    throw new Error('Erro ao buscar produtos: ' + error.message);
  }
};

// Função para contar o número total de produtos
exports.getProductCount = async () => {
  try {
    return await productRepository.count();
  } catch (error) {
    throw new Error('Erro ao contar produtos: ' + error.message);
  }
};

// Função para buscar um produto por ID
exports.getProductById = async (productId) => {
  try {
    return await productRepository.findById(productId);
  } catch (error) {
    throw new Error('Erro ao buscar produto por ID: ' + error.message);
  }
};

// Função para buscar produtos por nome
exports.getProductByName = async (name) => {
  try {
    return await productRepository.findByName(name);
  } catch (error) {
    throw new Error('Erro ao buscar produto por nome: ' + error.message);
  }
};

// Função para atualizar um produto
exports.updateProduct = async (productId, updateData) => {
  try {
    return await productRepository.update(productId, updateData);
  } catch (error) {
    throw new Error('Erro ao atualizar produto: ' + error.message);
  }
};

// Função para remover um produto
exports.removeProduct = async (productId) => {
  try {
    return await productRepository.remove(productId);
  } catch (error) {
    throw new Error('Erro ao remover produto: ' + error.message);
  }
};
