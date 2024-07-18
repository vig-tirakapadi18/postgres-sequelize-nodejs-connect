const express = require('express');
// const sequelize = require('./src/DB/connection');
const Book = require('./src/models/book.model');
const dotenv = require('dotenv');
const bookRoute = require("./src/routes/book.route");
const User = require('./src/models/user.model');

const app = express();
app.use(express.json());

dotenv.config();

app.use("/api/books", bookRoute);

Book.sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));

User.sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));

app.listen(5000, () => console.log(`Server listening on port 5000!`));