// home
const allRoutes = [
	'/',
	'/imdb/:collection',
	'/imdb/:collection/:id'
];

module.exports = ( router ) => {
	// route for retrieving Angular partials
	router.get( '/views/:fileName', ( req, res ) => {
		res.render( req.params.fileName );
	});
	router.get( allRoutes, ( req, res ) => res.render( 'layout' ));
	return router;
};
