import { Router } from 'express';
import { createUser } from './src/app/controllers/CreateUser.js';
import { login } from './src/app/controllers/Auth.js';

const router = Router();

router.post('/createUser', createUser);
router.post('/login', login);

export default router;
