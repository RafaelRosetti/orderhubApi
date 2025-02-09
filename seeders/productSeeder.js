const { Product } = require('../models'); // Ajuste conforme seu caminho de modelos

const products = [
  { name: 'Produto A', price: 100.0 },
  { name: 'Produto B', price: 150.0 },
  { name: 'Produto C', price: 200.0 }
];

async function seedProducts() {
  try {
    await Product.bulkCreate(products); // Insere múltiplos registros
    console.log('Produtos inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir produtos:', error);
  }
}

seedProducts();
