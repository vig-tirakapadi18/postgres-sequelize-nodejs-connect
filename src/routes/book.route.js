const { Router } = require("express");
const { createNewBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/book.controller");

const router = Router();

router.get("/", getAllBooks);

router.get("/:b_id", getBookById);

router.post("/", createNewBook);

router.patch("/:b_id", updateBook);

router.delete("/:b_id", deleteBook);

module.exports = router;