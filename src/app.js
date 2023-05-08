const express = require("express");

const booksRouter = require("./routes/booksRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/books", booksRouter);

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}...`);
});
