// movies router

module.exports = ( router, baseModel ) => {
  router.get( '/movies', ( req, res ) => {
    baseModel.find({ __t: 'Movie' }).then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });
};
