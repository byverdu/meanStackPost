module.exports = function( service, $routeParams, broadcaster, $rootScope, $timeout ) {
	const $movie = this;
	$movie.collection = [];
	$movie.contentReady = false;

	$rootScope.$on( 'item:searched', function ( event, item ) {
		$timeout(() => {
			$movie.collection = item.data;
			$movie.contentReady = true;
		}, 500 );
	});

	service.getAPIData( $routeParams.collection )
		.then( response => broadcaster.itemSearched( response ));
};
