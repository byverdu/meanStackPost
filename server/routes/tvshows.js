// tvshows router

import {
  getShows,
  getShowsId,
  postShowsId,
  deleteShows,
  deleteShowsId
} from '../controllers/tvshows';

module.exports = ( router ) => {
  router.get( '/tvshows', getShows );
  router.get( '/tvshows/:id', getShowsId );
  router.post( '/tvshows/:id', postShowsId );
  router.delete( '/tvshows', deleteShows );
  router.delete( '/tvshows/:id', deleteShowsId );
  return router;
};
