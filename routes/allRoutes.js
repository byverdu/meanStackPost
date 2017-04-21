import Express from 'express';
import { BaseModel } from '../API/models/BaseSchema';
import Movie from '../API/models/MovieSchema';
import TVShow from '../API/models/ShowSchema';

const router = Express.Router();
require( './home' )( router, Movie, TVShow );
require( './movies' )( router, BaseModel );
require( './tvshows' )( router, BaseModel );

module.exports = router;
