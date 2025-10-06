import { z } from 'zod';

export const pontoSchema = z.object({
  id: z.string().uuid().optional(),
  usuarioId: z.string().uuid(),
  data: z.date(),
  horasTrabalhadas: z.number().min(0),
  descricao: z.string().max(255).optional(),
});

export const createPontoSchema = pontoSchema.omit({ id: true });

export const updatePontoSchema = pontoSchema.partial();