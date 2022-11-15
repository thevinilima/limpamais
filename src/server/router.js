import { Router } from 'express';
import { createUser } from './src/app/controllers/User.js';
import { login } from './src/app/controllers/Auth.js';
import { getUserData } from './src/app/controllers/User.js';
import { ensureAuthenticated } from './src/app/middlewares/ensureAuthenticated.js';

const router = Router();

router.post('/user', createUser);
router.post('/login', login);

router.get('/user', ensureAuthenticated, getUserData);

export default router;
