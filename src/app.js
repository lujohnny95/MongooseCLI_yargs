require("./db/connection");
const yargs = require("yargs");
const { addBook, findBook, findAllBooks, updateBook, deleteBook } = require("./book/book.functions");
const mongoose = require("mongoose");

const app = async (args) => {
    try {
        if (args.add) {
            const bookObj = {
                title: args.title, 
                author: args.author, 
                year: args.year, 
                rating: args.rating,
            };
            //run add movie functionality, passing a bookObj
            await addBook(bookObj);
        }
        else if (args.find) {
            //find a book by title
            const findObj = {title: args.title}
            await findBook(findObj);
        }
        else if (args.findAll) {
            //find all books in the DB
            await findAllBooks();
        } 
            //updates a book entry by query
        else if (args.update) {
            const filter = {title: args.title}
            const update = {updateKey: args.key, updateValue: args.value}
            await updateBook(filter, update);
        }

        else if (args.delete) {
            const deleteObj = {title: args.title}
            await deleteBook(deleteObj);
        }

        else {
            console.log("Incorrect command") 
            mongoose.disconnect();
        }
    } catch (error) {
        console.log(error)
        mongoose.disconnect();
    }
};

app(yargs.argv);
