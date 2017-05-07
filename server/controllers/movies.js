// movies router

import { BaseModel } from '../models/BaseSchema';

const getMovies = ( req, res ) => {
  const promiseFind = BaseModel.find({ __t: 'Movie' }).exec();
  promiseFind.then(( response ) => {
    res.send( `${response[ 0 ].title}` );
  });
};

const getMoviesId = ( req, res ) => {
  const getId = req.params.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${getId}` }).exec();
  promiseFindOne.then(( response ) => {
    res.send( `${response.title}` );
  });
};

const postMoviesId = ( req, res ) => {
  const postId = req.params.id;
  const movieRating = req.body.rating;

  const promiseFindOne = BaseModel.findOne({ _id: `${postId}` }).exec();
  promiseFindOne.then(( movie ) => {
    movie.setMyRating( movieRating );
    movie.save().then( result => res.send( `myRating: ${result.myRating}` ));
  });
};

const deleteMoviesId = ( req, res ) => {
  const deleteId = req.params.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${deleteId}` }).exec();

  promiseFindOne.then(( movie ) => {
    BaseModel.remove({ _id: `${deleteId}` }).exec();
    res.send( `${movie.title} has been deleted` );
  });
};

const deleteMovies = ( req, res ) => {
  const deleteId = req.body.id;
  const promiseFindOne = BaseModel.findOne({ _id: `${deleteId}` }).exec();

  promiseFindOne.then(( movie ) => {
    BaseModel.remove({ _id: `${deleteId}` }).exec();
    res.send( `${movie.title} has been deleted` );
  });
};

export {
  getMovies,
  getMoviesId,
  postMoviesId,
  deleteMoviesId,
  deleteMovies
};
