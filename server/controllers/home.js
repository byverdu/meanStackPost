/* eslint-disable no-undef */
import { includeModule } from '../../conf';

const utils = includeModule( 'utils' );
const MovieModel = includeModule( 'server/models/MovieSchema' );
const TVShowModel = includeModule( 'server/models/ShowSchema' );

const homeGet = ( req, res ) => res.render( 'index', { title: 'Welcome to ImdbApp' });

const homePost = ( req, res ) => {
  const newItem = utils.objectToSave( req.body.data );
  if ( req.body.type === 'movie' ) {
    const newMovie = new MovieModel( newItem );
    newMovie.save().then( movie => res.send([`${movie.title}`, newItem]));
  }
  if ( req.body.type === 'tvshow' ) {
    const newTvshow = new TVShowModel( newItem );
    newTvshow.save().then( tvShow => res.send([`${tvShow.title}`, newItem]));
  }
};

export {
  homeGet,
  homePost
};
