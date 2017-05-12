/* eslint-disable no-undef */
import MovieModel from '../models/MovieSchema';
import TVShowModel from '../models/ShowSchema';

const getHome = ( req, res ) => res.render( 'layout' );

const postHome = ( req, res ) => {
	// console.log( req.body, 'req.bodyreq.body' );

	if ( req.body.type === 'movie' ) {
		const newMovie = new MovieModel( req.body.data );
		newMovie.save().then( movie => res.send( `${movie.title}` ));
	}
	if ( req.body.type === 'tvshow' ) {
		const newTvshow = new TVShowModel( req.body.data );
		newTvshow.save().then( tvShow => res.send( `${tvShow.title}` ));
	}
};

export {
  getHome,
  postHome
};
