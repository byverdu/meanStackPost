import Express from 'express';
import { BaseModel } from '../API/models/BaseSchema';

const router = Express.Router();
require( './home' )( router );
require( './movies' )( router, BaseModel );
require( './tvshows' )( router, BaseModel );

module.exports = router;
