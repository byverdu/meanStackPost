/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for routing

import chai from 'chai';
import request from 'supertest';


import { BaseModel } from '../API/models/BaseSchema';
import Movie from '../API/models/MovieSchema';
import TVShow from '../API/models/ShowSchema';
import server from '../server';
import sampleData from './sampleData';

const expect = chai.expect;
let movieId;
let tvshowId;
const {
  movieDataConverted,
  tvShowDataConverted
} = sampleData;

before(() => {
  const movie = new Movie({ title: 'CasaBlanca' });
  const tvshow = new TVShow({ title: 'Castle' });
  movie.save();
  tvshow.save();
  BaseModel.find().then(( response ) => {
    movieId = response.find( item => item.title === 'CasaBlanca' )._id;
    tvshowId = response.find( item => item.title === 'Castle' )._id;
  });
});

after(() => {
  BaseModel.remove({ _id: `${movieId}` }).exec();
});

describe( 'Routing test cases', () => {
  describe( 'Root route', () => {
    it( 'Visiting the root path should return 200', () => {
      request( server )
      .get( '/' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Up and running' ));
    });
  });

  describe( 'Movies route', () => {
    it( 'Movies route should return 200', () => {
      request( server )
      .get( '/movies' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Rambo' ));
    });

    it( 'A page per movie should be displayed', () => {
      request( server )
      .get( '/movies/58faa4dfb131c3f8c49cb3b0' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Rambo' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/movies/58faa4dfb131c3f8c49cb3b0' )
      .send({ rating: '5.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 5.6' ));
    });

    it( 'a movie can be deleted', () => {
      request( server )
      .delete( `/movies/${movieId}` )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'CasaBlanca has been deleted' ));
    });
  });

  describe( 'TVShow route', () => {
    it( 'Movies route should return 200', () => {
      request( server )
      .get( '/tvshows' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Lost' ));
    });
    it( 'A page per tvShow should be displayed', () => {
      request( server )
      .get( '/tvshows/58faa5d86d36baf8f226535d' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Lost' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/tvshows/58faa5d86d36baf8f226535d' )
      .send({ rating: '8.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 8.6' ));
    });

    it( 'a tvShow can be deleted', () => {
      request( server )
      .delete( `/tvshows/${tvshowId}` )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Castle has been deleted' ));
    });
  });

  describe( 'Post request', () => {
    it( 'Adding a new movie', () => {
      request( server )
      .post( '/' )
      .send({ type: 'movie', movie: movieDataConverted })
      .expect( 200 )
      .then(( response ) => {
        expect( response.text ).to.equal( 'Star Wars: Episode IV - A New Hope' );
        BaseModel.remove({ title: 'Star Wars: Episode IV - A New Hope' }).exec();
      }
      );
    });
    it( 'Adding a new tvShow', () => {
      request( server )
      .post( '/' )
      .send({ type: 'tvshow', tvshow: tvShowDataConverted })
      .expect( 200 )
      .then(( response ) => {
        expect( response.text ).to.equal( 'My Wife and Kids' );
        BaseModel.remove({ title: 'My Wife and Kids' }).exec();
      }
      );
    });
  });

  describe( 'Not Found route', () => {
    it( 'Visiting a not known route should return 404', () => {
      request( server )
      .get( '/notFound' )
      .expect( 404 )
      .then( response => expect( response.text ).to.equal( 'Sorry route not found' ));
    });
  });
});
