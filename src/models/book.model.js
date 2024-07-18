const Sequelize = require("sequelize");
const sequelize = require("../DB/connection");

const Book = sequelize.define("book", {
  b_id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  b_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  b_pages: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  b_author: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Book;