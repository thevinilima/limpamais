import { Router } from 'express';
import { createUser } from './src/app/controllers/User.js';
import { login } from './src/app/controllers/Auth.js';
import { getUserData } from './src/app/controllers/User.js';
import { ensureAuthenticated } from './src/app/middlewares/ensureAuthenticated.js';
import { createService } from './src/app/controllers/Service.js';

const router = Router();

router.post('/login', login);

// Users
router.post('/user', ensureAuthenticated, createUser);
router.get('/user', ensureAuthenticated, getUserData);

// Services
router.post('/services', ensureAuthenticated, createService);

export default router;
