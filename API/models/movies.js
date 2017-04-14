import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: String,
  poster: String,
  rating: Number,
  myRating: Number,
  year: Number,
  imdbUrl: String,
  genres: [String],
  actors: [String]
});

module.exports = MovieSchema;
