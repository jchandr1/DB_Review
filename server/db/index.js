const Sequelize = require('sequelize');
const db = require('./config');

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

User.hasMany(Paddle, { foreignKey: { name: 'user_id', allowNull: true }, onDelete: 'CASCADE' });
Paddle.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: true  }, onDelete: 'CASCADE' });

db.query('SET FOREIGN_KEY_CHECKS=0');
User.sync({ force: true });
Paddle.sync({ force: true });
db.query('SET FOREIGN_KEY_CHECKS=1');


module.exports = {
  User,
  Paddle
}
