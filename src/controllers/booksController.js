const booksService = require("../services/booksService");

class BooksController {
  getAll(req, res) {
    res.json(booksService.getAllBooks());
  }

  getBookById(req, res) {
    const { bookId } = req.params;
    res.json(booksService.getBookById(bookId));
  }

  createBook(req, res) {
    const book = req.body;
    res.status(201).json(booksService.addBook({ ...book, reviews: [] }));
  }

  updateTitle(req, res) {
    const { bookId } = req.params;
    const newTitle = req.body;
    res.json(booksService.updateBookTitle(bookId, newTitle));
  }

  getReviews(req, res) {
    const { bookId } = req.params;
    res.json(booksService.getReviews(bookId));
  }

  addReview(req, res) {
    const { bookId } = req.params;
    const review = req.body;
    res.status(201).json(booksService.addReview(bookId, review));
  }

  deleteReview(req, res) {
    const { bookId, reviewId } = req.params;
    booksService.deleteReview(bookId, reviewId);
    res.status(200).json({ msg: "Review successfully deleted" });
  }
}

module.exports = new BooksController();
