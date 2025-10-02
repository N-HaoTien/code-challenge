import { Router } from 'express';
import * as resourceController from '../../controllers/resourceController';

const router = Router();

router.post('/', resourceController.create);
router.get('/', resourceController.getAll);
router.get('/:id', resourceController.getById);
router.put('/:id', resourceController.update);
router.delete('/:id', resourceController.remove);

export default router;