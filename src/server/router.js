import { Router } from 'express';
import { createUser } from './src/app/controllers/CreateUser.js';

const router = Router();

router.post('/createUser', createUser);

export default router;
