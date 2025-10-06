import { z } from 'zod';

export const usuarioSchema = z.object({
  id: z.string().uuid().optional(),
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  departamentoId: z.string().uuid().optional(),
});

export const createUsuarioSchema = usuarioSchema.omit({ id: true });
export const updateUsuarioSchema = usuarioSchema.partial();