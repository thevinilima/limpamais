import { Router } from 'express';
import { createUser } from '../src/configs/db/controllers/User/CreateUser.js';

const router = Router();

router.post('/createUser', createUser);

export default router;