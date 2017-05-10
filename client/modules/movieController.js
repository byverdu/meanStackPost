module.exports = function( service ) {
	const $movie = this;

	service.getAPIData( 'movies' )
		.then( response => console.log( $movie, response ));
};
