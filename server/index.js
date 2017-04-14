import Express from 'express';

const router = Express.Router();

router.get( '/', ( req, res ) => res.send( 'Up and running' ));

module.exports = router;
