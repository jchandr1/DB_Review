const router = require('express').Router();
const controller = require('../controller/paddleController');

// if it's a get request at /api/paddles/getPaddle/:user_id(THIS IS THE REQ.PARAMS) then use the fetchPaddle controller
router.get('/getPaddle/:user_id', controller.fetchPaddle);

//if it's a post request at /api/paddles/createPaddle then use the createPaddle controller
router.post('/createPaddle', controller.createPaddle);

module.exports = router;
