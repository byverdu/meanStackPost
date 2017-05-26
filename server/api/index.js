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
	const newTvshow = new Imdb( req.body.data );
	newTvshow.save().then( tvShow => res.json({ data: `${tvShow.title} has been saved` }));
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
						data: `${movieRating} rating for ${movie.title} has been saved`,
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
		res.json({ data: `${movie.title} has been deleted` });
	});
};

export {
	getAll,
	getById,
	addItem,
  updateById,
  deleteById
};
