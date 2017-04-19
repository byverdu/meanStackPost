// home

module.exports = ( router ) => {
  router.get( '/', ( req, res ) => res.send( 'Up and running' ));
  router.post( '/', ( req, res ) => {
    if ( req.body.type === 'movie' ) {
      res.send( 'new movies added' );
    }
    if ( req.body.type === 'tvshow' ) {
      res.send( 'new tvshow added' );
    }
  });

  return router;
};
