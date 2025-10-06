import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

export class UsuarioController {
    private usuarioService: UsuarioService;

    constructor() {
        this.usuarioService = new UsuarioService();
    }

    public async getAllUsuarios(req: Request, res: Response): Promise<Response> {
        const usuarios = await this.usuarioService.getAllUsuarios();
        return res.json(usuarios);
    }

    public async getUsuarioById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const usuario = await this.usuarioService.getUsuarioById(Number(id));
        return usuario ? res.json(usuario) : res.status(404).json({ message: 'Usuario not found' });
    }

    public async createUsuario(req: Request, res: Response): Promise<Response> {
        const newUsuario = await this.usuarioService.createUsuario(req.body);
        return res.status(201).json(newUsuario);
    }

    public async updateUsuario(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updatedUsuario = await this.usuarioService.updateUsuario(Number(id), req.body);
        return updatedUsuario ? res.json(updatedUsuario) : res.status(404).json({ message: 'Usuario not found' });
    }

    public async deleteUsuario(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deleted = await this.usuarioService.deleteUsuario(Number(id));
        return deleted ? res.status(204).send() : res.status(404).json({ message: 'Usuario not found' });
    }
}