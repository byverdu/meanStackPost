import server from '../server';

const request = require('supertest'); // eslint-disable-line

describe( 'Root path', () => {
  it( 'Visiting the root path should return 200', ( done ) => {
    request( server )
      .get( '/' )
      .expect( 200 )
      .expect( 'Up and running' )
      .end(( err, res ) => {
        if ( err ) {
          done( err );
        } else {
          done();
        }
      });
  });
});

describe( 'Not Found path', () => {
  it( 'Visiting a not known route should return 404', ( done ) => {
    request( server )
      .get( '/notFound' )
      .expect( 404 )
      .expect( 'Sorry route not found' )
      .end(( err, res ) => {
        if ( err ) {
          done( err );
        } else {
          done();
        }
      });
  });
});
