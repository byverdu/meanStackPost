import { getAPI } from '../controllers/imdb';

module.exports = ( router ) => {
	router.get( '/api/:imdb', getAPI );
	return router;
};
