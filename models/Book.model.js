const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    default: null
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;