const Sequelize = require("sequelize");
const sequelize = require("../DB/connection");

const User = sequelize.define("user", {
  u_id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  u_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  u_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  u_numOfBooks: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = User;