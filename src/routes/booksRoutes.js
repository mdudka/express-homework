const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");
const {
  bookExists,
  reviewExists,
  validBook,
  validReview,
} = require("../middlewares/booksMiddlewares");

router.get("/", booksController.getAll);
router.get("/:bookId", bookExists, booksController.getBookById);
router.post("/", validBook, booksController.createBook);
router.patch("/:bookId", bookExists, booksController.updateTitle);

router.get("/:bookId/reviews", bookExists, booksController.getReviews);
router.post("/:bookId/reviews", [bookExists, validReview], booksController.addReview);
router.delete("/:bookId/reviews/:reviewId", [bookExists, reviewExists], booksController.deleteReview);

module.exports = router;
