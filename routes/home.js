// home

import { util } from '../utils';

module.exports = ( router, MovieModel, TVShowModel ) => {
  router.get( '/', ( req, res ) => res.send( 'Welcome to ImdbApp' ));

  router.post( '/', ( req, res ) => {
    const newItem = util.objectToSave( req.body.data );
    if ( req.body.type === 'movie' ) {
      const newMovie = new MovieModel( newItem );
      newMovie.save().then( movie => res.send([`${movie.title}`, newItem]));
    }
    if ( req.body.type === 'tvshow' ) {
      const newTvshow = new TVShowModel( newItem );
      newTvshow.save().then( tvShow => res.send([`${tvShow.title}`, newItem]));
    }
  });

  return router;
};
