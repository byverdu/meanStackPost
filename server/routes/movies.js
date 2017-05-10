// movies router

import {
  getMovies,
  getMoviesId,
  postMoviesId,
  deleteMoviesId,
  deleteMovies,
  getAPI
} from '../controllers/movies';

module.exports = ( router ) => {
  router.get( '/movies', getMovies );
  router.get( '/api/movies', getAPI );
  router.get( '/movies/:id', getMoviesId );
  router.post( '/movies/:id', postMoviesId );
  router.delete( '/movies/:id', deleteMoviesId );
  router.delete( '/movies', deleteMovies );
  return router;
};
