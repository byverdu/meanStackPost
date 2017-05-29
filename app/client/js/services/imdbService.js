// Service to retrive data from Imdb

module.exports = function ( $http ) {
	return {
		getImdbData( name, type ) {
			return $http({
				method: 'POST',
				url: `./api/search?q=${name}&t=${type}`
			});
		},

		addItem( data ) {
			return $http({
				method: 'POST',
				url: './api/add',
				data
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

		updateItem( id, rating ) {
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
