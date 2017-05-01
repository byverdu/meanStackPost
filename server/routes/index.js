import Express from 'express';

const router = Express.Router();
require( './home' )( router );
require( './movies' )( router );
require( './tvshows' )( router );

module.exports = router;
