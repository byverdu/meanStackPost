import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ImdbSchema = new Schema({
	title: { type: String, default: '' },
	type: { type: String, default: '' },
	description: { type: String, default: '' },
	poster: { type: String, default: '' },
	rating: { type: String, default: '' },
	myRating: { type: String, default: '' },
	imdburl: { type: String, default: '' },
	genre: { type: [String], default: [] }
});

ImdbSchema.methods.setMyRating = function ( rating ) { this.myRating = rating; };

const Imdb = mongoose.model( 'Imdb', ImdbSchema );

export {
	Imdb
};
