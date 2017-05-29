/* eslint-disable no-undef */
// methods for API
import mongoose from 'mongoose';
import { ImdbSchema } from '../models/ImdbSchema';
import { resolveImdbCall } from '../../../utils';

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
	const newImdb = new Imdb( req.body );	
	newImdb.save()
		.then( imdb => res.send( `${imdb.title} has been saved in ${imdb.type}` ));
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
		res.send( `${movie.title} has been deleted` );
	});
};

const searchImdb = ( req, res ) => {
	const query = {
		name: req.query.q,
		type: req.query.t
	};
	resolveImdbCall( query )
		.then( resp => res.json( resp ));
};


export {
	getAll,
	getById,
	addItem,
  updateById,
  deleteById,
	searchImdb
};
