const Book = require("./book.model");
const mongoose = require("mongoose");

exports.addBook = async (bookObj) => {
    try {
        //creates an entry
        const newBook= new Book(bookObj);
        //save into the DB
        await newBook.save();
        console.log(`${bookObj.title} by ${bookObj.author} succesfully added to Books.`)
        mongoose.disconnect();

    } catch (error) {
        console.log(error)
    }
}
//find one book:
exports.findBook = async (findObj) => {
    try {
        await Book.findOne(findObj);
        console.log(`${findObj.title} is found in Books.`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}
//find All books:
exports.findAllBooks = async () => {
    try {
        await Book.find();
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

//update book entry:
exports.updateBook = async (filter, update) => {
    try {
        await Book.findOneAndUpdate(filter, update);
        console.log(`Successfully updated Book records.`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

//delete an entry:
exports.deleteBook = async (deleteObj) => {
    try {
        await Book.deleteOne(deleteObj);
        console.log(`${deleteObj.title} has been removed from Books`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

