import mongoose from 'mongoose';
import util from 'util';

const Schema = mongoose.Schema;

function BaseSchema() {
  Schema.apply( this, arguments );

  this.add({
    model: { type: Schema.Types.ObjectId, ref: 'Model', required: true },
    title: { type: String },
    poster: { type: String },
    rating: { type: Number },
    myRating: { type: Number },
    year: { type: Number },
    imdbUrl: { type: String },
    genres: { type: [String] },
    actors: { type: [String] }
  });
}

util.inherits( BaseSchema, Schema );

module.exports = BaseSchema;
