import { Router } from 'express';
import {
	getLogs,
	addLog,
	updateLog,
	deleteLog,
} from '../controllers/logController';

const router: Router = Router();

router
	.route('/')
	.get(getLogs)
	.post(addLog);

router
	.route('/:id')
	.put(updateLog)
	.delete(deleteLog);

export default router;
