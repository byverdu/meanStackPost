import Express from 'express';

const router = Express.Router();

router.get( '/views/:fileName', ( req, res ) => {
	const fileName = req.params.fileName;
	res.render( fileName );
});

require( './imdb' )( router );
require( './home' )( router );

router.get( '*', ( req, res ) => res.render( 'layout' ));

// require( './movies' )( router );
// require( './tvshows' )( router );

module.exports = router;
