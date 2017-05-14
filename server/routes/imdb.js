// movies router

import {
  postImdbId,
  deleteImdbId
} from '../controllers/imdb';

module.exports = ( router ) => {
	router.get( '/imdb/:collection/:id', ( req, res ) => res.render( 'layout' ));
	router.post( '/imdb/:collection/:id', postImdbId );
	router.delete( '/imdb/:collection/:id', deleteImdbId );
	return router;
};
