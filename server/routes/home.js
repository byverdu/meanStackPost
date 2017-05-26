// home
import { getImdbData } from '../../utils';



module.exports = ( router ) => {
	// route for retrieving Angular partials
	router.get( '/views/:fileName', ( req, res ) => {
		res.render( req.params.fileName );
	});

	router.get('/search', (req, res ) => {
		console.log(req.query.q)

		getImdbData(req.query.q)
			.then( resp => res.json(resp))
		
	})
	router.get( '/', ( req, res ) => res.render( 'layout' ));
	// router.post( '/', postHome );
	return router;
};
