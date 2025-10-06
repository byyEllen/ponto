import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();
const usuarioController = new UsuarioController();

router.get('/', (req, res) => usuarioController.getAllUsuarios(req, res));
router.get('/:id', (req, res) => usuarioController.getUsuarioById(req, res));
router.post('/', (req, res) => usuarioController.createUsuario(req, res));
router.put('/:id', (req, res) => usuarioController.updateUsuario(req, res));
router.delete('/:id', (req, res) => usuarioController.deleteUsuario(req, res));

export default router;
