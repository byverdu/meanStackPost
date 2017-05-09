module.exports = function ( service, broadcaster, $rootScope, $timeout ) {
	const $home = this;
	$home.title = 'Welcome to ImdbApp';
	$home.imdbText = '';
	$home.imdbData = {};
	$rootScope.$on( 'item:searched', function ( event, item ) {
		$timeout(() => {
			$home.imdbData = item;
		}, 1000 );
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
