// home

module.exports = ( router, MovieModel, TVShowModel ) => {
  router.get( '/', ( req, res ) => res.send( 'Up and running' ));
  router.post( '/', ( req, res ) => {
    if ( req.body.type === 'movie' ) {
      const newMovie = new MovieModel( req.body.movie );
      newMovie.save().then( movie => res.send( `${movie.title}` ));
    }
    if ( req.body.type === 'tvshow' ) {
      const newTvshow = new TVShowModel( req.body.tvshow );
      newTvshow.save().then( tvShow => res.send( `${tvShow.title}` ));
    }
  });

  return router;
};
