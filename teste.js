import { PrismaClient } from './prisma/node_modules/@prisma/client';
const prisma = new PrismaClient();


// Função para realizar a consulta
async function getUsuarios() {
  try {
    // Use a função findMany para listar todos os registros da tabela Usuario
    const usuarios = await prisma.usuario.findMany();
    console.log(usuarios);
  } catch (error) {
    console.error('Erro ao buscar os usuários:', error);
  } finally {
    // Certifique-se de fechar a conexão quando terminar
    await prisma.$disconnect();
  }
}

// Chame a função para listar os usuários
getUsuarios();
export { prisma };