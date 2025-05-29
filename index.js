// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to parse JSON

let books = []; // In-memory storage

// GET - fetch all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST - add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT - update a book by id
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  books = books.map(book => book.id === id ? updatedBook : book);
  res.json(updatedBook);
});

// DELETE - remove a book by id
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  books = books.filter(book => book.id !== id);
  res.json({ message: 'Book deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
