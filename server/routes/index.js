import Express from 'express';
// import { BaseModel } from '../models/BaseSchema';
// import Movie from '../models/MovieSchema';
// import TVShow from '../models/ShowSchema';

const router = Express.Router();
require( './home' )( router );
require( './movies' )( router );
// require( './tvshows' )( router, BaseModel );

module.exports = router;
