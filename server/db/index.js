const Sequelize = require('sequelize');
const db = require('./config');

// Schema definitions
// allowNull means whether or not that field is required when creating a new row in that table.

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  skillLevel: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});

const Paddle = db.define('Paddle', {
  speed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  power: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  control: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

// Creating a relationship between users and paddles
// Adding a foreign key on the paddle table with the name user_id
// without specifying the name, it would just add the foreign key with a name of userId
  // I like it underscored and while there may be a property you can add on the schema definition. It hasn't always worked for me
    // underscore: true - this is the property you add to automatically underscore the foreign key
  // So I just explicitly state the name

User.hasMany(Paddle, { foreignKey: { name: 'user_id', allowNull: true }, onDelete: 'CASCADE' });
Paddle.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: true  }, onDelete: 'CASCADE' });

// To bypass the 'foreign key constraint fails' error
// Also creating the tables in the database that you specified in /db/config/index.js

db.query('SET FOREIGN_KEY_CHECKS=0');
User.sync({ force: true });
Paddle.sync({ force: true });
db.query('SET FOREIGN_KEY_CHECKS=1');

module.exports = {
  User,
  Paddle
}
