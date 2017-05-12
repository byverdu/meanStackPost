// home
import { getHome, postHome } from '../controllers/home';

module.exports = ( router ) => {
  router.get('/views/:fileName', function(req, res){
  var fileName = req.params.fileName;
  console.log(fileName)
  if(!fileName) return;  // might want to change this
  res.render( fileName );
});
  router.get( '/', getHome );
  router.post( '/', postHome );
  return router;
};
