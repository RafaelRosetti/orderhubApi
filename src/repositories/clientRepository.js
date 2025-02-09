const { Client } = require('../models'); // Importando o modelo de Cliente

// Função para criar um cliente
exports.create = async (clientData) => {
  return await Client.create(clientData);
};

// Função para buscar todos os clientes
exports.findAll = async () => {
  return await Client.findAll();
};

// Função para contar o número total de clientes
exports.count = async () => {
  return await Client.count();
};

// Função para buscar um cliente por ID
exports.findById = async (id) => {
  return await Client.findByPk(id);
};

// Função para buscar clientes por nome
exports.findByName = async (name) => {
  return await Client.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%` // Busca insensível a maiúsculas/minúsculas
      }
    }
  });
};

// Função para atualizar um cliente
exports.update = async (id, updateData) => {
  return await Client.update(updateData, { where: { id } });
};

// Função para remover um cliente
exports.remove = async (id) => {
  return await Client.destroy({ where: { id } });
};
