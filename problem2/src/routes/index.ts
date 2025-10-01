import { Router } from 'express';
import resourceRoute from './resources/resource.route';

const router = Router();

router.use('/resources', resourceRoute);

export default router;