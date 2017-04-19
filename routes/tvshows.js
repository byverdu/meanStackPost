// tvshows router

module.exports = ( router, baseModel ) => {
  router.get( '/tvshows', ( req, res ) => {
    const promiseFind = baseModel.find({ __t: 'TVShow' }).exec();
    promiseFind.then(( response ) => {
      res.send( `${response[ 0 ].title}` );
    });
  });

  router.get( '/tvshows/:title', ( req, res ) => {
    const tvshowPage = req.params.title;
    const promiseFindOne = baseModel.findOne({ title: `${tvshowPage}` }).exec();
    promiseFindOne.then(( response ) => {
      res.send( `${response.title}` );
    });
  });
};
