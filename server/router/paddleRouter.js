const router = require('express').Router();
const controller = require('../controller/paddleController');

router.get('/getPaddle/:user_id', controller.fetchPaddle);
router.post('/createPaddle', controller.createPaddle);

module.exports = router;
