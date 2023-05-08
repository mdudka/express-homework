const express = require("express");

const booksRouter = require("./routes/booksRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/books", booksRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}...`);
});
