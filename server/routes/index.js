import Express from 'express';

const router = Express.Router({ mergeParams: true });

require( './api' )( router );
require( './home' )( router );
require( './imdb' )( router );

module.exports = router;
