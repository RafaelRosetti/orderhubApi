const clientRepository = require('../repositories/clientRepository');

// Função para criar um cliente
exports.createClient = async (clientData) => {
  try {
    return await clientRepository.create(clientData);
  } catch (error) {
    throw new Error('Erro ao criar cliente: ' + error.message);
  }
};

// Função para buscar todos os clientes
exports.getAllClients = async () => {
  try {
    return await clientRepository.findAll();
  } catch (error) {
    throw new Error('Erro ao buscar clientes: ' + error.message);
  }
};

// Função para contar o número total de clientes
exports.getClientCount = async () => {
  try {
    return await clientRepository.count();
  } catch (error) {
    throw new Error('Erro ao contar clientes: ' + error.message);
  }
};

// Função para buscar um cliente por ID
exports.getClientById = async (clientId) => {
  try {
    return await clientRepository.findById(clientId);
  } catch (error) {
    throw new Error('Erro ao buscar cliente por ID: ' + error.message);
  }
};

// Função para buscar clientes por nome
exports.getClientByName = async (name) => {
  try {
    return await clientRepository.findByName(name);
  } catch (error) {
    throw new Error('Erro ao buscar clientes por nome: ' + error.message);
  }
};

// Função para atualizar um cliente
exports.updateClient = async (clientId, updateData) => {
  try {
    return await clientRepository.update(clientId, updateData);
  } catch (error) {
    throw new Error('Erro ao atualizar cliente: ' + error.message);
  }
};

// Função para remover um cliente
exports.removeClient = async (clientId) => {
  try {
    return await clientRepository.remove(clientId);
  } catch (error) {
    throw new Error('Erro ao remover cliente: ' + error.message);
  }
};

