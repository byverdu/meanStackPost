import mongoose from 'mongoose';
import util from 'util';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

function BaseSchema() {
  mongoose.Schema.apply( this, arguments );

  this.add({
    title: { type: String, default: '' },
    poster: { type: String, default: '' },
    rating: { type: String, default: '' },
    myRating: { type: String, default: '' },
    year: { type: Number, default: 0 },
    imdburl: { type: String, default: '' },
    genres: { type: [String], default: [] },
    actors: { type: [String], default: [] }
  });

  this.methods.setMyRating = function ( rating ) { this.myRating = rating; };
}

util.inherits( BaseSchema, Schema );
const BaseModel = mongoose.model( 'Imdb', new BaseSchema());

export {
  BaseSchema,
  BaseModel
};
