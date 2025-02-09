const { Product } = require('../models'); // Importando o modelo de Produto

// Função para criar um produto
exports.create = async (productData) => {
  return await Product.create(productData);
};

// Função para buscar todos os produtos
exports.findAll = async () => {
  return await Product.findAll();
};

// Função para contar o número total de produtos
exports.count = async () => {
  return await Product.count();
};

// Função para buscar um produto por ID
exports.findById = async (id) => {
  return await Product.findByPk(id);
};

// Função para buscar produtos por nome
exports.findByName = async (name) => {
  return await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%` // Busca insensível a maiúsculas/minúsculas
      }
    }
  });
};

// Função para atualizar um produto
exports.update = async (id, updateData) => {
  return await Product.update(updateData, { where: { id } });
};

// Função para remover um produto
exports.remove = async (id) => {
  return await Product.destroy({ where: { id } });
};
