const express = require('express');
const router = express.Router();

const paddleRoutes = require('./paddleRouter');

// Telling your server that whenever an endpoint comes with /api/paddles gets hit, use the paddleRoutes variable
  // paddleRoutes variable tells what the router which controller to use depending on the request
router.use('/paddles', paddleRoutes)

module.exports = router;

