/* global angular */
module.exports = function( service, $routeParams, broadcaster, $rootScope, $timeout, Notification ) {
	const $imdb = this;
	$imdb.title = `${$routeParams.collection}s`;
	$imdb.collection = [];
	$imdb.contentReady = false;
	$imdb.singleItem = {};
	$imdb.rating = 0;
	$imdb.revealForm = false;

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

	$imdb.deleteItem = function ( index ) {
		// const type = $routeParams.collection;
		const id = $imdb.collection[ index ]._id;
		service.deleteItem( id )
			.then(( resp ) => {
				if ( resp.status === 200 ) {
					Notification.success( `${resp.data}` );
					$timeout(() => {
						$imdb.collection.splice( index, 1 );
					}, 500 );
				} else {
					Notification.error( 'Something went wrong deleting on DB' );
				}
			});
	};

	$imdb.showForm = function () {
		$imdb.revealForm = true;
	};

	$imdb.postRatingItem = function () {
		// const type = $routeParams.collection;
		const id = $routeParams.id;
		service.postRatingItem( id, $imdb.rating )
			.then(( resp ) => {
				if ( resp.status === 200 ) {
					Notification.success( `${resp.data.text}` );
					$imdb.singleItem = resp.data.movie;
					$imdb.revealForm = false;
				} else {
					Notification.error( 'Something went wrong deleting on DB' );
				}
			});
	};
};
