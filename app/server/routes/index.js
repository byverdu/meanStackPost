import Express from 'express';

const router = Express.Router({ mergeParams: true });

require( './api' )( router );
require( './routes' )( router );

module.exports = router;
