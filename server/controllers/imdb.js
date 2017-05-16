// movies router

import { BaseModel } from '../models/BaseSchema';

const postImdbId = ( req, res ) => {
	const postId = req.params.id;
	const movieRating = req.body.rating;

	BaseModel.findOne({ _id: `${postId}` })
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

const deleteImdbId = ( req, res ) => {
	const deleteId = req.params.id;
	const promiseFindOne = BaseModel.findOne({ _id: `${deleteId}` }).exec();

	promiseFindOne.then(( movie ) => {
		BaseModel.remove({ _id: `${deleteId}` }).exec();
		res.send( `${movie.title} has been deleted` );
	});
};

export {
  postImdbId,
  deleteImdbId
};
