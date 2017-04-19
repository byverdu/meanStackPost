/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for routing

import chai from 'chai';
import request from 'supertest';

import server from '../server';

const expect = chai.expect;

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
      .get( '/movies/starwars' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'starwars' ));
    });
  });

  describe( 'TVShow route', () => {
    it( 'Movies route should return 200', () => {
      request( server )
      .get( '/tvshows' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'V' ));
    });
    it( 'A page per tvShow should be displayed', () => {
      request( server )
      .get( '/tvshows/Castle' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Castle' ));
    });
  });

  describe( 'Post request', () => {
    it( 'Adding a new movie', () => {
      request( server )
      .post( '/' )
      .send({ type: 'movie' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'new movies added' )
      );
    });
    it( 'Adding a new tvShow', () => {
      request( server )
      .post( '/' )
      .send({ type: 'tvshow' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'new tvshow added' )
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
