import { PrismaClient, Ponto } from '@prisma/client';

export class PontoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllPontos(): Promise<Ponto[]> {
        return await this.prisma.ponto.findMany();
    }

    async getPontoById(id: number): Promise<Ponto | null> {
        return await this.prisma.ponto.findUnique({
            where: { id },
        });
    }

    async createPonto(data: Omit<Ponto, 'id'>): Promise<Ponto> {
        return await this.prisma.ponto.create({
            data,
        });
    }

    async updatePonto(id: number, data: Partial<Omit<Ponto, 'id'>>): Promise<Ponto> {
        return await this.prisma.ponto.update({
            where: { id },
            data,
        });
    }

    async deletePonto(id: number): Promise<Ponto> {
        return await this.prisma.ponto.delete({
            where: { id },
        });
    }
}