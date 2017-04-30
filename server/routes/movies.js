// movies router

import {
  getMovies,
  getMoviesId,
  postMoviesId,
  deleteMoviesId,
  deleteMovies
} from '../controllers/movies';

module.exports = ( router ) => {
  router.get( '/movies', getMovies );
  router.get( '/movies/:id', getMoviesId );
  router.post( '/movies/:id', postMoviesId );
  router.delete( '/movies/:id', deleteMoviesId );
  router.delete( '/movies', deleteMovies );
  return router;
};
