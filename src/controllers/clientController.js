const Client = require('../models/client'); // Verifique a importação

// Função para buscar todos os clientes
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para contar o número total de clientes
exports.countClients = async (req, res) => {
    try {
        // Utiliza o método count do Sequelize
        const total = await Client.count();
        res.json({ total });
    } catch (error) {
        console.error('Erro ao contar clientes:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para buscar cliente pelo ID
exports.getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(client);
    } catch (error) {
        console.error('Erro ao buscar cliente por ID:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para buscar cliente pelo nome
exports.getClientByName = async (req, res) => {
    try {
        const name = req.params.name;
        console.log(`Buscando cliente com nome: ${name}`); // 🔍 Log de depuração

        const client = await Client.findOne({ where: { name } });

        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        res.json(client);
    } catch (error) {
        console.error('Erro ao buscar cliente pelo nome:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para criar um cliente
exports.createClient = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const newClient = await Client.create({ name, email, phone, address });
        res.status(201).json(newClient);
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para atualizar um cliente
exports.updateClient = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await client.update({ name, email, phone });
        res.json(client);
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

// Função para deletar um cliente
exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await client.destroy();
        res.json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};
