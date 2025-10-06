import { NextFunction, Request, Response } from 'express';
import { z, ZodError } from 'zod';

export const validateUsuario = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.issues });
      } else {
        res.status(500).json({ error: 'Erro desconhecido no validador de usuário.' });
      }
    }
  };
};

export const validatePonto = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.issues });
      } else {
        res.status(500).json({ error: 'Erro desconhecido no validador de ponto.' });
      }
    }
  };
};

export const validateDepartamento = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.issues });
      } else {
        res.status(500).json({ error: 'Erro desconhecido no validador de departamento.' });
      }
    }
  };
};
