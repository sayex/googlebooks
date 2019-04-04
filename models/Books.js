var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BooksSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    authors: {
      type: Array,
      required: true
    },
    description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
  });

var Books = mongoose.model("Books", BooksSchema);

// Export the Article model
module.exports = Books;