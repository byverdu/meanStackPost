import Express from 'express';
import { BaseModel } from '../API/models/BaseSchema';

const router = Express.Router();

router.get( '/tvshows', ( req, res ) => {
  BaseModel.find({ __t: 'TVShow' }).then(( response ) => {
    res.send( `${response[ 0 ].title}` );
  });
});

module.exports = router;
