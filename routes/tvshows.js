// tvshows router

module.exports = ( router, baseModel ) => {
  router.get( '/tvshows', ( req, res ) => {
    baseModel.find({ __t: 'TVShow' }).then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });
};
