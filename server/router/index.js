const express = require('express');
const router = express.Router();

const paddleRoutes = require('./paddleRouter');

router.use('/paddles', paddleRoutes)

module.exports = router;

