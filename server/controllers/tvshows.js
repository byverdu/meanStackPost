// tvshows router
import { BaseModel } from '../models/BaseSchema';

const getShows = ( req, res ) => {
  const promiseFind = BaseModel.find({ __t: 'TVShow' }).exec();
  promiseFind.then(( response ) => {
    res.send( `${response[ 0 ].title}` );
  });
};

const getShowsId = ( req, res ) => {
  const getId = req.params.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${getId}` }).exec();
  promiseFindOne.then(( response ) => {
    res.send( `${response.title}` );
  });
};

const postShowsId = ( req, res ) => {
  const postId = req.params.id;
  const tvshowRating = req.body.rating;

  const promiseFindOne = BaseModel.findOne({ _id: `${postId}` }).exec();
  promiseFindOne.then(( tvshow ) => {
    tvshow.setMyRating( tvshowRating );
    tvshow.save().then( result => res.send( `myRating: ${result.myRating}` ));
  });
};

const deleteShows = ( req, res ) => {
  const deleteId = req.body.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${deleteId}` }).exec();

  promiseFindOne.then(( tvShow ) => {
    BaseModel.remove({ _id: `${deleteId}` }).exec();
    res.send( `${tvShow.title} has been deleted` );
  });
};

const deleteShowsId = ( req, res ) => {
  const deleteId = req.params.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${deleteId}` }).exec();

  promiseFindOne.then(( tvShow ) => {
    BaseModel.remove({ _id: `${deleteId}` }).exec();
    res.send( `${tvShow.title} has been deleted` );
  });
};

export {
  getShows,
  getShowsId,
  postShowsId,
  deleteShows,
  deleteShowsId
};
