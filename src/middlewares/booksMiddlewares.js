const createError = require("http-errors");

const booksService = require("../services/booksService");

const bookExists = (req, res, next) => {
  const { bookId } = req.params;
  const book = booksService.getBookById(bookId);
  if (!book) {
    next(createError(404, "Book not found"));
  }
  next();
};

const reviewExists = (req, res, next) => {
  const { bookId, reviewId } = req.params;
  const review = booksService.getReviewById(bookId, reviewId);
  if (!review) {
    next(createError(404, "Review not found"));
  }
  next();
};

const validBook = (req, res, next) => {
  const { id, title } = req.body;
  if (!id) {
    next(createError(400, "Id is required."));
  }
  if (booksService.getBookById(id)) {
    next(createError(409, "Book with this id already exists."));
  }
  if (!title) {
    next(createError(400, "Title is required."));
  }
  next();
};

const validReview = (req, res, next) => {
  const { bookId } = req.params;
  const { id, comment } = req.body;
  if (!id) {
    next(createError(400, "Id is required."));
  }
  if (booksService.getReviewById(bookId, id)) {
    next(createError(409, "Review with this id already exists."));
  }
  if (!comment) {
    next(createError(400, "Comment is required."));
  }
  next();
};

module.exports = {
  bookExists,
  reviewExists,
  validBook,
  validReview,
};
