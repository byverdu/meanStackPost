/* eslint-disable no-undef */
import { includeModule } from '../../conf';
import MovieModel from '../models/MovieSchema';
import TVShowModel from '../models/ShowSchema';

const utils = includeModule( 'utils' );

console.log(utils);

const getHome = ( req, res ) => res.render( 'index', { title: 'Welcome to ImdbApp' });

const postHome = ( req, res ) => {
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
  getHome,
  postHome
};
