import { Request, Response } from 'express';
import { DepartamentoService } from '../services/departamento.service';

export class DepartamentoController {
    private departamentoService: DepartamentoService;

    constructor() {
        this.departamentoService = new DepartamentoService();
    }

    public async getAllDepartamentos(req: Request, res: Response): Promise<Response> {
        const departamentos = await this.departamentoService.getAllDepartamentos();
        return res.json(departamentos);
    }

    public async getDepartamentoById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const departamento = await this.departamentoService.getDepartamentoById(Number(id));
        if (!departamento) {
            return res.status(404).json({ message: 'Departamento não encontrado' });
        }
        return res.json(departamento);
    }

    public async createDepartamento(req: Request, res: Response): Promise<Response> {
        const newDepartamento = await this.departamentoService.createDepartamento(req.body);
        return res.status(201).json(newDepartamento);
    }

    public async updateDepartamento(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updatedDepartamento = await this.departamentoService.updateDepartamento(Number(id), req.body);
        if (!updatedDepartamento) {
            return res.status(404).json({ message: 'Departamento não encontrado' });
        }
        return res.json(updatedDepartamento);
    }

    public async deleteDepartamento(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deleted = await this.departamentoService.deleteDepartamento(Number(id));
        if (!deleted) {
            return res.status(404).json({ message: 'Departamento não encontrado' });
        }
        return res.status(204).send();
    }
}
