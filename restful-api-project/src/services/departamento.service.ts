import { PrismaClient, Departamento } from '@prisma/client';

export class DepartamentoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllDepartamentos(): Promise<Departamento[]> {
        return await this.prisma.departamento.findMany();
    }

    async getDepartamentoById(id: number): Promise<Departamento | null> {
        return await this.prisma.departamento.findUnique({
            where: { id },
        });
    }

    async createDepartamento(data: Omit<Departamento, 'id'>): Promise<Departamento> {
        return await this.prisma.departamento.create({
            data,
        });
    }

    async updateDepartamento(id: number, data: Partial<Omit<Departamento, 'id'>>): Promise<Departamento> {
        return await this.prisma.departamento.update({
            where: { id },
            data,
        });
    }

    async deleteDepartamento(id: number): Promise<Departamento> {
        return await this.prisma.departamento.delete({
            where: { id },
        });
    }
}