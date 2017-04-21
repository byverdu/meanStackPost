import Express from 'express';
import { BaseModel } from '../API/models/BaseSchema';
import Movie from '../API/models/MovieSchema';

const router = Express.Router();
require( './home' )( router, Movie );
require( './movies' )( router, BaseModel );
require( './tvshows' )( router, BaseModel );

module.exports = router;
