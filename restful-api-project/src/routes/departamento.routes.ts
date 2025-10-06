import { Router } from 'express';
import { DepartamentoController } from '../controllers/departamento.controller';
import { validateDepartamento } from '../middlewares/validation.middleware';

const router = Router();
const departamentoController = new DepartamentoController();

router.get('/', departamentoController.getAllDepartamentos.bind(departamentoController));
router.get('/:id', departamentoController.getDepartamentoById.bind(departamentoController));
router.post('/', validateDepartamento, departamentoController.createDepartamento.bind(departamentoController));
router.put('/:id', validateDepartamento, departamentoController.updateDepartamento.bind(departamentoController));
router.delete('/:id', departamentoController.deleteDepartamento.bind(departamentoController));

export default router;
