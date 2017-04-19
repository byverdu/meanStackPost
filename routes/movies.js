// movies router

module.exports = ( router, baseModel ) => {
  router.get( '/movies', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'Movie' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/movies/:title', ( req, res ) => {
    const moviePage = req.params.title;
    const promiseFindOne = baseModel.findOne({ title: `${moviePage}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });
};
