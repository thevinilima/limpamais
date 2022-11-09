import { Router } from 'express';
import { createUser } from './src/configs/db/app/controllers/CreateUser.js';

const router = Router();

router.post('/createUser', createUser);

export default router;
