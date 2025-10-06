import { PrismaClient, Usuario } from '@prisma/client';

export class UsuarioService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllUsuarios(): Promise<Usuario[]> {
        return await this.prisma.usuario.findMany();
    }

    async getUsuarioById(id: number): Promise<Usuario | null> {
        return await this.prisma.usuario.findUnique({
            where: { id },
        });
    }

    async createUsuario(data: Omit<Usuario, 'id'>): Promise<Usuario> {
        return await this.prisma.usuario.create({
            data,
        });
    }

    async updateUsuario(id: number, data: Partial<Omit<Usuario, 'id'>>): Promise<Usuario> {
        return await this.prisma.usuario.update({
            where: { id },
            data,
        });
    }

    async deleteUsuario(id: number): Promise<Usuario> {
        return await this.prisma.usuario.delete({
            where: { id },
        });
    }
}