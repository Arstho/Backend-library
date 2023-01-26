const Book = require("../models/Book.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    try {
      const addBook = await Book.create({
        name: req.body.name,
        genre: req.body.name,
      });
      return res.json(addBook);
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const getAllBooks = await Book.find({});
      return res.json(getAllBooks);
    } catch (error) {
      console.log(error.message);
    }
  },

  getBookById: async (req, res) => {
    try {
      const BookById = await Book.find(req.params.id);
      return res.json(BookById);
    } catch (error) {
      console.log(error.message);
    }
  },

  getBooksByGenre: async (req, res) => {
    try {
      const getBooksByGenre = await Book.find({genres: req.params.id});
      return res.json(getBooksByGenre);
    } catch (error) {
      console.log(error.message);
    }
  },

  patchBookById: async (req, res) => {
    try {
      const patchBook = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.name
      });
      return res.json(patchBook);
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteBookById: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      return res.json(deleteBook);
    } catch (error) {
      console.log(error.message);
    }
  },

};