// movies router

module.exports = ( router, baseModel ) => {
  router.get( '/movies', ( req, res ) => {
    baseModel.find({ __t: 'Movie' }).then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/movies/:title', ( req, res ) => {
    const moviePage = req.params.title;
    baseModel.findOne({ title: `${moviePage}` }).then(( response ) => {
      res.send( `${response.title}` );
    });
  });
};
