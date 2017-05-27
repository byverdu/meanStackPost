// Service to retrive data from Imdb

module.exports = function ( $http ) {
	return {
		getImdbData( name ) {
			const query = {
				name
			};
			return $http({
				method: 'GET',
				url: `./search?q=${name}`
			});
		},

		postHomeData( data ) {
			const isTVShow = 'seasons' in data;
			const tempData = {
				data,
				type: ( isTVShow ) ? 'tvshow' : 'movie'
			};
			return $http({
				method: 'POST',
				url: './api/add',
				data: tempData
			});
		},

		getAPIData( type ) {
			return $http({
				method: 'GET',
				url: `./api/all/${type}`
			});
		},

		deleteItem( id ) {
			return $http({
				method: 'DELETE',
				url: `./api/delete/${id}`,
				data: id
			});
		},

		postRatingItem( id, rating ) {
			return $http({
				method: 'PUT',
				url: `./api/update/${id}`,
				data: {
					rating
				}
			});
		}
	};
};
