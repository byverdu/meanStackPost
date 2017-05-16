module.exports = function ( service, broadcaster, $rootScope, $timeout, Notification ) {
	const $home = this;
	$home.title = 'Welcome to ImdbApp';
	$home.imdbText = '';
	$home.imdbData = {};
	$home.links = [
		{ text: 'Movies', url: '/imdb/movie' },
		{ text: 'TvShows', url: '/imdb/tvshow' }
	];

	$rootScope.$on( 'item:searched', function ( event, item ) {
		$timeout(() => {
			if ( 'message' in item ) {
				Notification.error( item.message );
				return;
			}
			$home.imdbData = item;
		}, 500 );
	});
	$home.callImdbApi = function () {
		service.getImdbData( this.imdbText )
			.then( response => broadcaster.itemSearched( response ));
		$home.imdbText = '';
	};

	$home.saveToDb = function () {
		service.postHomeData( $home.imdbData )
			.then(( response ) => {
				if ( response.status === 200 ) {
					Notification.success( `${response.data} ${response.config.data.type} has been saved to DB` );
				} else {
					Notification.error( 'Something went wrong saving on DB' );
				}
			});
	};
};
