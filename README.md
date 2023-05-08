# Books and review for books with Express.js

This is a homework project built with Node.js and Express, designed for educational purposes.
The project is a simple REST API for managing books and their reviews.

## Available Routes
This project provides the following routes:

- `GET /`: Get all books
- `GET /:bookId`: Get a specific book by ID
- `POST /`: Create a new book
- `PATCH /:bookId`: Update a book's title
- `GET /:bookId/reviews`: Get all reviews for a specific book
- `POST /:bookId/reviews`: Add a new review for a specific book
- `DELETE /:bookId/reviews/:reviewId`: Delete a review for a specific book

## Getting started

1. Clone the repository to your local machine:
        
        git clone git@github.com:mdudka/express-homework.git
2. Navigate to the project directory:
            
        cd homework-express
3. Install the project dependencies:

        npm install
4. Start the development server:
        
        npm run dev
This wiil start server at `http://localhost:3000`
        

