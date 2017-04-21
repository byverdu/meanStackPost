/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for routing

import chai from 'chai';
import request from 'supertest';


import { BaseModel } from '../API/models/BaseSchema';
import server from '../server';
import sampleData from './sampleData';

const expect = chai.expect;
const {
  movieDataConverted,
  tvShowDataConverted
} = sampleData;

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
      .get( '/movies/Rambo' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Rambo' ));
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
      .get( '/tvshows/Lost' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Lost' ));
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
