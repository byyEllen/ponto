import { Request, Response } from 'express';
import { PontoService } from '../services/ponto.service';
import { pontoSchema } from '../schemas/ponto.schema';

export class PontoController {
    private pontoService: PontoService;

    constructor() {
        this.pontoService = new PontoService();
    }


    public async getAllPontos(req: Request, res: Response): Promise<Response> {
        const pontos = await this.pontoService.getAllPontos();
        return res.json(pontos);
    }


    public async getPontoById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const ponto = await this.pontoService.getPontoById(Number(id));
        if (!ponto) {
            return res.status(404).json({ message: 'Ponto not found' });
        }
        return res.json(ponto);
    }


    public async createPonto(req: Request, res: Response): Promise<Response> {
        const result = pontoSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(result.error);
        }

        const data = {
            ...result.data,
            usuarioId: Number(result.data.usuarioId),
        };

        const novoPonto = await this.pontoService.createPonto(data);
        return res.status(201).json(novoPonto);
    }


    public async updatePonto(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const result = pontoSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json(result.error);
        }

        const data = {
            ...result.data,
            usuarioId: Number(result.data.usuarioId),
        };

        const updatedPonto = await this.pontoService.updatePonto(Number(id), data);
        if (!updatedPonto) {
            return res.status(404).json({ message: 'Ponto not found' });
        }
        return res.json(updatedPonto);
    }


    public async deletePonto(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deleted = await this.pontoService.deletePonto(Number(id));
        if (!deleted) {
            return res.status(404).json({ message: 'Ponto not found' });
        }
        return res.json({ message: `Ponto ${id} deleted` });
    }
}
