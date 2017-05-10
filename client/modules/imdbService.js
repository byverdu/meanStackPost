// Service to retrive data from Imdb
import { objectToSave } from '../../utils';

const imdbApi = require( 'imdb-api' );

module.exports = function ( $http ) {
	return {
		getImdbData( text ) {
			return imdbApi.get( text )
			.then( response => objectToSave( response ))
			.catch( error => error );
		},

		postHomeData( data ) {
			const isTVShow = 'seasons' in data;
			const tempData = {
				data,
				type: ( isTVShow ) ? 'tvshow' : 'movie'
			};
			return $http({
				method: 'POST',
				url: './',
				data: tempData
			});
		},

		getAPIData( type ) {
			return $http({
				method: 'GET',
				url: `./api/${type}`
			});
		}
	};
};
