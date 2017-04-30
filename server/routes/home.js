// home
import { homeGet, homePost } from '../controllers/home';

module.exports = ( router ) => {
  router.get( '/', homeGet );
  router.post( '/', homePost );
  return router;
};
