// home
import { postHome } from '../controllers/home';

module.exports = ( router ) => {
	// route for retrieving Angular partials
	router.get( '/views/:fileName', ( req, res ) => {
		res.render( req.params.fileName );
	});
	router.get( '/', ( req, res ) => res.render( 'layout' ));
	router.post( '/', postHome );
	return router;
};
