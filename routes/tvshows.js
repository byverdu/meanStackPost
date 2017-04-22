// tvshows router

module.exports = ( router, baseModel ) => {
  router.get( '/tvshows', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'TVShow' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/tvshows/:id', ( req, res ) => {
    const tvshowPage = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${tvshowPage}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });

  router.post( '/tvshows/:id', ( req, res ) => {
    const tvshowPage = req.params.id;
    const tvshowRating = req.body.rating;

    const promiseFindOne = baseModel.findOne({ _id: `${tvshowPage}` }).exec();
    promiseFindOne.then(( tvshow ) => {
      tvshow.setMyRating( tvshowRating );
      tvshow.save().then( result => res.send( `myRating: ${result.myRating}` ));
    });
  });
};
