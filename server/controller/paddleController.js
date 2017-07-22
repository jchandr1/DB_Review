const axios = require('axios');
const db = require('../db');

module.exports = {
  fetchPaddle: (req, res) => {
    db.Paddle.findAll({
      where: {
        user_id: req.params.user_id,
      }
    })
      .then(data => {
        res.status(200).send(data);
        console.log('Successfully fetched all paddles');
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in fetching all paddles');
      })
  },
  createPaddle: (req, res) => {
    db.Paddle.findOrCreate({
      where: {
        speed: req.body.speed,
        power: req.body.power,
        control: req.body.control,
        user_id: req.body.user_id
      }
    })
      .spread((newPaddle, created) => {
        if (created) {
          res.status(200).send(newPaddle);
          console.log('Successfully created a paddle');
        } else {
          res.status(500).send('Paddle already exists');
          console.log('Paddle already exists');
        }
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in creating a paddle');
      })
  }
}
