/* eslint-disable no-undef */
// methods for API
import mongoose from 'mongoose';
import { ImdbSchema } from '../models/ImdbSchema';

const Imdb = mongoose.model( 'Imdb', ImdbSchema );

const getAll = ( req, res ) => {
	Imdb.find({ type: req.params.imdb })
		.exec()
		.then(( response ) => {
			res.type( 'json' );
			res.json( response );
		});
};

const getById = ( req, res ) => {
	Imdb
		.findOne({ _id: `${req.params.id}` })
		.exec()
		.then(( response ) => {
			res.type( 'json' );
			res.json( response );
		});
};

const addItem = ( req, res ) => {
	// if ( req.body.type === 'movie' ) {
	// 	const newMovie = new MovieModel( req.body.data );
	// 	newMovie.save().then( movie => res.send( `${movie.title}` ));
	// }
	// if ( req.body.type === 'tvshow' ) {
	// 	const newTvshow = new TVShowModel( req.body.data );
	// 	newTvshow.save().then( tvShow => res.send( `${tvShow.title}` ));
	// }
};

const updateById = ( req, res ) => {
	const postId = req.params.id;
	const movieRating = req.body.rating;

	Imdb.findOne({ _id: `${postId}` })
		.exec()
		.then(( movie ) => {
			movie.setMyRating( movieRating );
			movie.save()
				.then(() => {
					res.json({
						text: `${movieRating} rating saved for ${movie.title}`,
						movie
					});
				});
		});
};

const deleteById = ( req, res ) => {
	const deleteId = req.params.id;
	const promiseFindOne = Imdb.findOne({ _id: `${deleteId}` }).exec();

	promiseFindOne.then(( movie ) => {
		Imdb.remove({ _id: `${deleteId}` }).exec();
		res.send( `${movie.title} has been deleted` );
	});
};

export {
	getAll,
	getById,
	addItem,
  updateById,
  deleteById
};
