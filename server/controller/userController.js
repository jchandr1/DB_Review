const axios = require('axios');
const db = require('../');

module.exports = {
  fetchUser: (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(error => {
        res.status(500).send(error);
      })
  }
}