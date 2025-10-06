import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const departamento1 = await prisma.departamento.create({
        data: { nome: 'Recursos Humanos' },
    });

    const departamento2 = await prisma.departamento.create({
        data: { nome: 'Desenvolvimento' },
    });

    const usuario1 = await prisma.usuario.create({
        data: {
            nome: 'Alice',
            email: 'alice@example.com',
            senha: '123456',
            departamentoId: departamento1.id,
        },
    });

    const usuario2 = await prisma.usuario.create({
        data: {
            nome: 'Bob',
            email: 'bob@example.com',
            senha: '123456',
            departamentoId: departamento2.id,
        },
    });

    await prisma.ponto.create({
        data: {
            usuarioId: usuario1.id,
            data: new Date('2023-10-01T08:00:00Z'),
        },
    });

    await prisma.ponto.create({
        data: {
            usuarioId: usuario2.id,
            data: new Date('2023-10-01T09:00:00Z'),
        },
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
