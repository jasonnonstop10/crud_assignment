// functions function structure
const Movie = require("../models/jay_movies.model");

module.exports.addMovie = async (input) => {
  const {name,description,blockbuster,types,review} = input;

  if (!name) {
    throw { message: "no name" };

  }

  return await Movie.create({name,description,blockbuster,types,review });
};

module.exports.findMovieByName = (input) => {
  console.log("input: ", input);
  return Movie.findOne({ name: input });
};

module.exports.updateMovieById = async (input) => {
  const {name,description,blockbuster,types,review} = input;
  return await Movie.findOneAndUpdate(input,name,description,blockbuster,types,review);
};

module.exports.deleteMovieById = async (input) => {
  return await Movie.findByIdAndDelete(input);
};
