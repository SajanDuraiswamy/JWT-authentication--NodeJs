
const express = require('express');
const router = express.Router();
const { register, login, protected: protectedRoute } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protectedRoute);

module.exports = router;