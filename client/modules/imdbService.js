// Service to retrive data from Imdb
import { objectToSave } from '../../utils';

const imdbApi = require( 'imdb-api' );

module.exports = function () {
	return {
		getImdbData( text ) {
	  return imdbApi.get( text )
				.then( response => objectToSave( response ));
		}
	}
};
