// home
import { getHome, postHome } from '../controllers/home';

module.exports = ( router ) => {
  router.get( '/', getHome );
  router.post( '/', postHome );
  return router;
};
