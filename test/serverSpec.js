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
const {
  movieDataConverted,
  tvShowDataConverted
} = sampleData;

before(() => {
  const movie = new Movie({ title: 'CasaBlanca' });
  // movie.save();
  BaseModel.findOne({ title: 'CasaBlanca' }).then(( response ) => {
    console.log(response);
  });
});

after(() => {
  BaseModel.remove({ title: 'CasaBlanca' }).exec();
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
      .get( '/movies/58f93c39d4fe95ba0c16ddf2' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Rambo' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/movies/58f93c39d4fe95ba0c16ddf2' )
      .send({ rating: '5.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 5.6' ));
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
      .get( '/tvshows/58f93d36b64873ba88a78057' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Lost' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/tvshows/58f93d36b64873ba88a78057' )
      .send({ rating: '8.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 8.6' ));
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
