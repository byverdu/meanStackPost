// movies router

module.exports = ( router, baseModel ) => {
  router.get( '/movies', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'Movie' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/movies/:id', ( req, res ) => {
    const getId = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${getId}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });

  router.post( '/movies/:id', ( req, res ) => {
    const postId = req.params.id;
    const movieRating = req.body.rating;

    const promiseFindOne = baseModel.findOne({ _id: `${postId}` }).exec();
    promiseFindOne.then(( movie ) => {
      movie.setMyRating( movieRating );
      movie.save().then( result => res.send( `myRating: ${result.myRating}` ));
    });
  });

  router.delete( '/movies/:id', ( req, res ) => {
    const deleteId = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${deleteId}` }).exec();

    promiseFindOne.then(( movie ) => {
      baseModel.remove({ _id: `${deleteId}` }).exec();
      res.send( `${movie.title} has been deleted` );
    });
  });
};
