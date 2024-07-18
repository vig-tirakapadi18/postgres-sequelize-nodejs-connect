const { v4: uuidv4 } = require('uuid');
const Book = require("../models/book.model");

exports.getAllBooks = (req, res) => {
  Book
    .findAll()
    .then(books => res.status(200).json({ success: true, data: books }))
    .catch(err => res.status(404).json({ success: false, error: err.message }))
};

exports.getBookById = (req, res) => {
  const { b_id } = req.params;

  // Using findAll()
  // Book
  //   .findAll({ where: { b_id } })
  //   .then(book => res.status(200).json({ success: true, data: book }))
  //   .catch(err => res.status(404).json({ success: false, err: err.message }));

  // Using findByPk() - finds the book by its Primary Key
  Book
    .findByPk(b_id)
    .then(book => res.status(200).json({ success: true, data: book }))
    .catch(err => res.status(404).json({ success: false, err: err.message }));
};

exports.createNewBook = (req, res) => {
  console.log(req.body)
  const { b_name, b_pages, b_author } = req.body;

  const b_id = uuidv4();

  Book
    .create({ b_id, b_name, b_pages, b_author })
    .then(result => {
      console.log(result);
      res.status(200).send({ success: true, data: result });
    })
    .catch(err => {
      console.log(err);
      res.status(404).send({ success: false, message: err.message });
    });
};

exports.updateBook = (req, res) => {
  const { b_name, b_author, b_pages } = req.body;
  const { b_id } = req.params;

  Book
    .findByPk(b_id)
    .then(book => {
      book.b_name = b_name || book.b_name;
      book.b_author = b_author || book.b_author;
      book.b_pages = b_pages || book.b_pages;
      return book.save()
    })
    .then(book => res.status(200).send({ success: true, data: book }))
    .catch(err => res.status(404).send({ success: false, message: err.message }))
};

exports.deleteBook = (req, res) => {
  const { b_id } = req.params;

  Book
    .destroy({ where: { b_id } })
    .then(book => res.status(200).send({ success: true, message: `Deleted book ID=${b_id} successfully!` }))
    .catch(err => res.status(404).send({ success: false, message: err.message }));
};
