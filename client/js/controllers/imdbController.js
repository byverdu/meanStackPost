/* global angular */
module.exports = function( service, $routeParams, broadcaster, $rootScope, $timeout ) {
	const $imdb = this;
	$imdb.collection = [];
	$imdb.contentReady = false;
	$imdb.singleItem = {};

	$rootScope.$on( 'item:searched', function ( event, item ) {
		$timeout(() => {
			$imdb.collection = item.data;
			angular.forEach( $imdb.collection, ( value, key ) => {
				value.itemurl = `/imdb/${$routeParams.collection}/${value._id}`;
			});
			$imdb.singleItem = $imdb.collection.find( item => item._id === $routeParams.id );
			$imdb.contentReady = true;
		}, 500 );
	});

	service.getAPIData( $routeParams.collection )
		.then( response => broadcaster.itemSearched( response ));
};
