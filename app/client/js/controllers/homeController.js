module.exports = function ( service, broadcaster, $rootScope, $timeout, Notification ) {
	const $home = this;
	$home.title = 'Welcome to ImdbApp';
	$home.imdbText = '';
	$home.imdbType = 'movie';
	$home.imdbData = {};
	$home.links = [
		{ text: 'Movies', url: '/imdb/movie' },
		{ text: 'TvShows', url: '/imdb/series' }
	];
	$home.contentReady = false;

	$rootScope.$on( 'item:searched', function ( event, item ) {
		$timeout(() => {
			if ( 'message' in item ) {
				Notification.error( item.message );
				return;
			}
			$home.imdbData = item.data;
			$home.contentReady = false;
		}, 500 );
	});
	$home.callImdbApi = function () {
		$home.contentReady = true;
		service.getImdbData( this.imdbText, this.imdbType )
			.then( response => broadcaster.itemSearched( response ));
		$home.imdbText = '';
		$home.imdbType = '';
	};

	$home.saveToDb = function () {
		service.addItem( $home.imdbData )
			.then(( response ) => {
				if ( response.status === 200 ) {
					Notification.success( `${response.data}` );
					$home.imdbData = null;
				} else {
					Notification.error( 'Something went wrong saving on DB' );
				}
			});
	};
};
