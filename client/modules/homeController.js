module.exports = function ( service, broadcaster, $rootScope, $timeout, Notification ) {
	const $home = this;
	$home.title = 'Welcome to ImdbApp';
	$home.imdbText = '';
	$home.imdbData = {};
	$home.links = [
		{ text: 'Movies', url: '/movies' },
		{ text: 'TvShows', url: '/tvshows' }
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
			.then( response => console.log(response, 'repsoenene'))
	};
};
