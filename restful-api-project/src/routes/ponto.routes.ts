import { Router } from 'express';
import { PontoController } from '../controllers/ponto.controller';
import { validatePonto } from '../middlewares/validation.middleware';

const asyncHandler = (fn: any) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const router = Router();
const pontoController = new PontoController();

router.get('/', asyncHandler(pontoController.getAllPontos.bind(pontoController)));
router.get('/:id', asyncHandler(pontoController.getPontoById.bind(pontoController)));
router.post('/', validatePonto, asyncHandler(pontoController.createPonto.bind(pontoController)));
router.put('/:id', validatePonto, asyncHandler(pontoController.updatePonto.bind(pontoController)));
router.delete('/:id', asyncHandler(pontoController.deletePonto.bind(pontoController)));

export default router;