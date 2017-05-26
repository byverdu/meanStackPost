import * as api from '../api';

module.exports = ( router ) => {
	router.get( '/api/item/:id', api.getById );
	router.get( '/api/all/:imdb', api.getAll );
	router.post( '/api/add', api.addItem );
	router.put( '/api/update/:id', api.updateById );
	router.delete( '/api/delete/:id', api.deleteById );
	return router;
};
