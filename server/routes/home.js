// home
import { postHome } from '../controllers/home';

module.exports = ( router ) => {
	router.post( '/', postHome );
	return router;
};
