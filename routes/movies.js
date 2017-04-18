import Express from 'express';
import { BaseModel } from '../API/models/BaseSchema';

const router = Express.Router();

router.get( '/movies', ( req, res ) => {
  BaseModel.find({ __t: 'Movie' }).then(( response ) => {
    res.send( `${response[ 0 ].title}` );
  });
});

module.exports = router;
