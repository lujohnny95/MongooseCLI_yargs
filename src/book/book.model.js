const mongoose = require("mongoose");

//class objects 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String,
        default: "Not Specified"
    },
    year: {
        type: String,
        default: "Not Specified"
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: "Not Specified"
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;