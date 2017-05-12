module.exports = function( service ) {
	const $movie = this;

	$movie.test = 'test';

	service.getAPIData( 'movies' )
		.then( response => console.log( $movie, response ));
};
