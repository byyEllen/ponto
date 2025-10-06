import { z } from 'zod';

export const departamentoSchema = z.object({
  id: z.number().optional(),
  nome: z.string().min(1, 'Nome é obrigatório'),
  descricao: z.string().optional(),
});

export const createDepartamentoSchema = departamentoSchema.omit({ id: true });
export const updateDepartamentoSchema = departamentoSchema.pick({ id: true, nome: true, descricao: true });