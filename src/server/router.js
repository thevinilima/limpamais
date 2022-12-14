const { Router } = require('express');
const { login } = require('./src/app/controllers/Auth.js');
const { rateDiarista } = require('./src/app/controllers/Diarista.js');
const {
  createService,
  getServices,
  getRequesterServices,
  createTreatmentService,
  takeService,
  setServiceStatus,
  handleServicePayment,
} = require('./src/app/controllers/Service.js');
const {
  createUser,
  getUserData,
  rateUser,
} = require('./src/app/controllers/User.js');
const {
  ensureAuthenticated,
} = require('./src/app/middlewares/ensureAuthenticated.js');

const router = Router();

router.post('/login', login);

// Users
router.post('/users', createUser);
router.get('/users/current', ensureAuthenticated, getUserData);
router.post('/users/rate', ensureAuthenticated, rateUser);

// Services
router.post('/services', ensureAuthenticated, createService);
router.post('/services/treatment', ensureAuthenticated, createTreatmentService);
router.get('/services', ensureAuthenticated, getServices);
router.get(
  '/services/requester/:tel',
  ensureAuthenticated,
  getRequesterServices
);
router.post('/services/take/:numServico', ensureAuthenticated, takeService);
router.patch(
  '/services/setstatus/:numServico',
  ensureAuthenticated,
  setServiceStatus
);
router.post(
  '/services/pay/:numServico',
  ensureAuthenticated,
  handleServicePayment
);

// Diarista
router.post('/diaristas/rate', ensureAuthenticated, rateDiarista);

module.exports = router;
