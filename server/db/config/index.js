const Sequelize = require('sequelize');
// Telling the app to connect to the database called pingpong while giving it the username and password.
// Also providing the host, which in this case is localhost, as well as the dialect.
const db = new Sequelize('pingpong', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

console.log('Successfully connected to the DB!');

module.exports = db;
