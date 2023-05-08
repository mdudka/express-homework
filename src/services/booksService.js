const books = require("../booksData");

class BooksService {
  getAllBooks() {
    return books;
  }

  getBookById(id) {
    return books.find((book) => book.id.toString() === id.toString());
  }

  addBook(book) {
    books.push(book);
    return book;
  }

  updateBookTitle(id, newTitle) {
    const book = this.getBookById(id);
    book.title = newTitle;
    return book;
  }

  getReviews(bookId) {
    return this.getBookById(bookId).reviews;
  }

  getReviewById(bookId, reviewId) {
    return this.getReviews(bookId).find(
      (review) => review.id.toString() === reviewId.toString()
    );
  }

  addReview(bookId, review) {
    this.getReviews(bookId).push(review);
    return this.getReviews(bookId);
  }

  deleteReview(bookId, reviewId) {
    const book = this.getBookById(bookId);
    book.reviews = book.reviews.filter(
      (review) => review.id.toString() !== reviewId.toString()
    );
  }
}

module.exports = new BooksService();
