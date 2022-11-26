const { Router } = require('express');
const { login } = require('./src/app/controllers/Auth.js');
const {
  createService,
  getServices,
} = require('./src/app/controllers/Service.js');
const { createUser, getUserData } = require('./src/app/controllers/User.js');
const {
  ensureAuthenticated,
} = require('./src/app/middlewares/ensureAuthenticated.js');

const router = Router();

router.post('/login', login);

// Users
router.post('/users', createUser);
router.get('/users/current', ensureAuthenticated, getUserData);

// Services
router.post('/services', ensureAuthenticated, createService);
router.get('/services', ensureAuthenticated, getServices);

module.exports = router;
