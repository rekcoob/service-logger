import { Router } from 'express';
import { getTechs, addTech, deleteTech } from '../controllers/techController';

const router: Router = Router();

router
  .route('/')
  .get(getTechs)
  .post(addTech);

router
  .route('/:id')
  .delete(deleteTech);

export default router;
