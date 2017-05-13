import { getListAPI, getIdFromAPI } from '../controllers/imdb';

module.exports = ( router ) => {
	router.get( '/api/item/:id', getIdFromAPI );
	router.get( '/api/:imdb', getListAPI );
	return router;
};
