// tvshows router

module.exports = ( router, baseModel ) => {
  router.get( '/tvshows', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'TVShow' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/tvshows/:id', ( req, res ) => {
    const getId = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${getId}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });

  router.post( '/tvshows/:id', ( req, res ) => {
    const postId = req.params.id;
    const tvshowRating = req.body.rating;

    const promiseFindOne = baseModel.findOne({ _id: `${postId}` }).exec();
    promiseFindOne.then(( tvshow ) => {
      tvshow.setMyRating( tvshowRating );
      tvshow.save().then( result => res.send( `myRating: ${result.myRating}` ));
    });
  });

  router.delete( '/tvshows/:id', ( req, res ) => {
    const deleteId = req.params.id;
    const promiseFindOne = baseModel.findOne({ _id: `${deleteId}` }).exec();

    promiseFindOne.then(( tvShow ) => {
      baseModel.remove({ _id: `${deleteId}` }).exec();
      res.send( `${tvShow.title} has been deleted` );
    });
  });
};
