// movies router

module.exports = ( router, baseModel ) => {
  router.get( '/movies', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'Movie' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/movies/:id', ( req, res ) => {
    const moviePage = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${moviePage}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });

  router.post( '/movies/:id', ( req, res ) => {
    const moviePage = req.params.id;
    const movieRating = req.body.rating;

    const promiseFindOne = baseModel.findOne({ _id: `${moviePage}` }).exec();
    promiseFindOne.then(( movie ) => {
      movie.setMyRating( movieRating );
      movie.save().then( result => res.send( `myRating: ${result.myRating}` ));
    });
  });
};
