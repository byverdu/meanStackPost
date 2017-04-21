// home

module.exports = ( router, MovieModel ) => {
  router.get( '/', ( req, res ) => res.send( 'Up and running' ));
  router.post( '/', ( req, res ) => {
    if ( req.body.type === 'movie' ) {
      const toSave = new MovieModel( req.body.movie );
      toSave.save().then( movie => res.send( `${movie.title}` ));
    }
    if ( req.body.type === 'tvshow' ) {
      res.send( 'new tvshow added' );
    }
  });

  return router;
};
