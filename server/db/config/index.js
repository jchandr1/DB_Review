const Sequelize = require('sequelize');

const db = new Sequelize('pingpong', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

console.log('Successfully connected to the DB!');

module.exports = db;
