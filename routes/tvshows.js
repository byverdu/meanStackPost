// tvshows router

module.exports = ( router, baseModel ) => {
  router.get( '/tvshows', ( req, res ) => {
    baseModel.find({ __t: 'TVShow' }).then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/tvshows/:title', ( req, res ) => {
    const tvshowPage = req.params.title;
    baseModel.findOne({ title: `${tvshowPage}` }).then(( response ) => {
      res.send( `${response.title}` );
    });
  });
};
