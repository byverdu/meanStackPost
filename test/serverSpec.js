/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for routing

import chai from 'chai';
import request from 'supertest';

import server from '../server';

const expect = chai.expect;

describe( 'Root path', () => {
  it( 'Visiting the root path should return 200', () => {
    request( server )
      .get( '/' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Up and running' ));
  });
});

describe( 'Not Found path', () => {
  it( 'Visiting a not known route should return 404', () => {
    request( server )
      .get( '/notFound' )
      .expect( 404 )
      .then( response => expect( response.text ).to.equal( 'Sorry route not found' ));
  });
});
