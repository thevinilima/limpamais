import { Router } from 'express';
import { createUser } from './src/app/controllers/User.js';
import { login } from './src/app/controllers/Auth.js';
import { getUserData } from './src/app/controllers/User.js';

const router = Router();

router.post('/createUser', createUser);
router.post('/login', login);

router.get('/user', getUserData);

export default router;
