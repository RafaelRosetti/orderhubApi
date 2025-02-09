const Product = require('../models/product'); // Verifique a importação

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

exports.countProducts = async (req, res) => {
    try {
        // Utiliza o método count do Sequelize
        const total = await Product.count();
        res.json({ total });
    } catch (error) {
        console.error('Erro ao contar produtos:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

// Função para buscar produto pelo ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.json(product);
    } catch (error) {
        console.error('Erro ao buscar produto por ID:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

exports.getProductByName = async (req, res) => {
    try {
        const name = req.params.name;
        console.log(`Buscando produto com nome: ${name}`); // 🔍 Log de depuração

        const product = await Product.findOne({ where: { name } });

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.json(product);
    } catch (error) {
        console.error('Erro ao buscar produto pelo nome:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = await Product.create({ name, description, price, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        await product.update({ name, description, price, stock });
        res.json(product);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        await product.destroy();
        res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};
