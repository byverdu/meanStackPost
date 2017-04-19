import mongoose from 'mongoose';
import util from 'util';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

function BaseSchema() {
  mongoose.Schema.apply( this, arguments );

  this.add({
    kind: { type: String },
    title: { type: String },
    poster: { type: String },
    rating: { type: Number },
    myRating: { type: Number },
    year: { type: Number },
    imdburl: { type: String },
    genres: { type: [String] },
    actors: { type: [String] }
  });
}

util.inherits( BaseSchema, Schema );
const BaseModel = mongoose.model( 'Imdb', new BaseSchema());

export {
  BaseSchema,
  BaseModel
};
