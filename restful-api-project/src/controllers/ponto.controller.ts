import { Request, Response } from 'express';
import { PontoService } from '../services/ponto.service';
import { z } from 'zod';
import { pontoSchema } from '../schemas/ponto.schema';

export class PontoController {
    private pontoService: PontoService;

    constructor() {
        this.pontoService = new PontoService();
    }

   public async createPonto(req: Request, res: Response): Promise<Response> {
    const result = pontoSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(result.error);
    }

    // Converte usuarioId para número
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
