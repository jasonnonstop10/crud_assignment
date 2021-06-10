// functions function structure
const Movie = require("../models/jay_movies.model");

module.exports.addMovie = async (input) => {
  const {name,description,blockbuster,types,review} = input;

  // validate data
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
  const { name,description,blockbuster,types,review } = input;

  return await Movie.findOneAndUpdate(
    { _id : input_id },
    { name,description,blockbuster,types,review },
    { new: true, omitUndefined: true }
  );
};

module.exports.deleteMovieById = async (input) => {
  const { _id } = input;
  return await Movie.findByIdAndDelete(_id);
};
