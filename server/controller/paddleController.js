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
    // findOrCreate basically tells the db, 'hey is this in the db? if not then create it, if it is then send them an error'
    db.Paddle.findOrCreate({
      where: {
        speed: req.body.speed,
        power: req.body.power,
        control: req.body.control,
        user_id: req.body.user_id
      }
    })
    // spread is used because the response sends back two things, the new row it created
    // if it wasn't found and a boolean indicating whether or not creation was successful
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
