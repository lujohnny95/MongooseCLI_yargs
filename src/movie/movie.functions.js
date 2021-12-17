const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
    try {
        //creates an entry and adds/saves it on to the database.
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        console.log(`${movieObj.title} starring ${movieObj.actor} successfully added to Movie records.`)
    } catch (error) {
        console.log(error)
    }
}
//find one Movie by title:
 exports.findMovie = async (findObj) => {
    try {
        await Movie.findOne(findObj);
        console.log(`${findObj.title} is found in Movie records.`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
 }
//find All books:
exports.findAllMovies = async () => {
    try {
        await Movie.find();
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

//update book entry:
exports.updateMovie = async (filter, update) => {
    try {
        await Book.findOneAndUpdate(filter, update);
        console.log(`Successfully updated Movie records.`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

//delete an entry:
exports.deleteMovie = async (deleteObj) => {
    try {
        await Movie.deleteOne(deleteObj);
        console.log(`${deleteObj.title} has been removed from Movie records`)
        mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

