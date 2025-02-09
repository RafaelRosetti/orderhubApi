const { Client } = require('./src/models'); // Ajustando o caminho para src/models

const clients = [
  { name: 'Cliente 1', email: 'cliente1@example.com', phone: '1234567890' },
  { name: 'Cliente 2', email: 'cliente2@example.com', phone: '0987654321' },
  { name: 'Cliente 3', email: 'cliente3@example.com', phone: '1122334455' }
];

async function seedClients() {
  try {
    await Client.bulkCreate(clients); // Insere múltiplos registros
    console.log('Clientes inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir clientes:', error);
  }
}

seedClients();

