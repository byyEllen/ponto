import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed initial Departamento data
    const departamento1 = await prisma.departamento.create({
        data: {
            nome: 'Recursos Humanos',
        },
    });

    const departamento2 = await prisma.departamento.create({
        data: {
            nome: 'Desenvolvimento',
        },
    });

    // Seed initial Usuario data
    const usuario1 = await prisma.usuario.create({
        data: {
            nome: 'Alice',
            email: 'alice@example.com',
            departamentoId: departamento1.id,
        },
    });

    const usuario2 = await prisma.usuario.create({
        data: {
            nome: 'Bob',
            email: 'bob@example.com',
            departamentoId: departamento2.id,
        },
    });

    // Seed initial Ponto data
    await prisma.ponto.create({
        data: {
            usuarioId: usuario1.id,
            entrada: new Date('2023-10-01T08:00:00Z'),
            saida: new Date('2023-10-01T17:00:00Z'),
        },
    });

    await prisma.ponto.create({
        data: {
            usuarioId: usuario2.id,
            entrada: new Date('2023-10-01T09:00:00Z'),
            saida: new Date('2023-10-01T18:00:00Z'),
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