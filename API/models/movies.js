import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: String,
  poster: String,
  rating: Number,
  myRating: Number
});

module.exports = MovieSchema;
