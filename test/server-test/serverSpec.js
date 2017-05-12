/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
// Test cases for routing

import { expect, assert } from 'chai';
import request from 'supertest';


import { BaseModel } from '../../server/models/BaseSchema';
import Movie from '../../server/models/MovieSchema';
import TVShow from '../../server/models/ShowSchema';
import server from '../../server/';
import sampleData from '../sampleData';

let movieId;
let tvshowId;
let movieId2;
let tvshowId2;
const {
  sampleMovie,
  sampleTvshow
} = sampleData;

before(() => {
	const movie = new Movie({ title: 'CasaBlanca' });
	const tvshow = new TVShow({ title: 'Castle' });
	const movie2 = new Movie({ title: 'X men' });
	const tvshow2 = new TVShow({ title: 'Silicon Valley' });
	movie.save();
	tvshow.save();
	movie2.save();
	tvshow2.save();
	movieId = movie._id;
	tvshowId = tvshow._id;
	movieId2 = movie2._id;
	tvshowId2 = tvshow2._id;
});

after(() => {
	BaseModel.remove({ _id: `${movieId}` }).exec();
	BaseModel.remove({ _id: `${tvshowId}` }).exec();
	BaseModel.remove({ _id: `${movieId2}` }).exec();
	BaseModel.remove({ _id: `${tvshowId2}` }).exec();
});

	describe( 'Routing test cases', () => {
		describe( 'Root route', () => {
			it( 'Visiting the root path should return 200', () => {
				request( server )
				.get( '/' )
				.expect( 200 )
				.then( response => assert( response.text, 'Awesome Imdb' ));
			});
		});

  describe( 'Movies route', () => {
    it( 'Movies route should return 200', () => {
      request( server )
      .get( '/movies' )
      .expect( 200 )
      .then( response => expect( response.text ).to.include( 'Awesome Imdb' ));
    });

    it( 'A page per movie should be displayed', () => {
      request( server )
      .get( '/movies/58fd4480c720743968b52631' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Rambo' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/movies/58fd4480c720743968b52631' )
      .send({ rating: '5.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 5.6' ));
    });

    it( 'a movie can be deleted from it\'s page', () => {
      request( server )
      .delete( `/movies/${movieId}` )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'CasaBlanca has been deleted' ));
    });

    it( 'a movie can be deleted from the main movies page', () => {
      request( server )
      .delete( '/movies' )
      .send({ id: movieId2 })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'X men has been deleted' ));
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
      .get( '/tvshows/58fd43f70eab2a3931f01d62' )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Lost' ));
    });

    it( 'myRating property can be set', () => {
      request( server )
      .post( '/tvshows/58fd43f70eab2a3931f01d62' )
      .send({ rating: '8.6' })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'myRating: 8.6' ));
    });

    it( 'a tvShow can be deleted from it\'s page', () => {
      request( server )
      .delete( `/tvshows/${tvshowId}` )
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Castle has been deleted' ));
    });

    it( 'a tvShow can be deleted from the main tvShows page', () => {
      request( server )
      .delete( '/tvshows' )
      .send({ id: tvshowId2 })
      .expect( 200 )
      .then( response => expect( response.text ).to.equal( 'Silicon Valley has been deleted' ));
    });
  });

  describe( 'Post request', () => {
    it( 'Adding a new movie', () => {
      request( server )
      .post( '/' )
      .send({ type: 'movie', data: sampleMovie })
      .expect( 200 )
      .then(( response ) => {
        const data = Object.keys( response.body[ 1 ]);
        expect( response.body[ 0 ]).to.equal( 'Star Wars: Epispode IV - A New Hope' );
        expect( data ).to.have.length( 7 );
        BaseModel.remove({ title: 'Star Wars: Episode IV - A New Hope' }).exec();
      });
    });
    it( 'Adding a new tvShow', () => {
      request( server )
      .post( '/' )
      .send({ type: 'tvshow', data: sampleTvshow })
      .expect( 200 )
      .then(( response ) => {
        const data = Object.keys( response.body[ 1 ]);
        expect( response.body[ 0 ]).to.equal( 'My Wife and Kids' );
        expect( data ).to.contains( 'seasons' );
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

	describe( 'API route', () => {
		it( 'Fetching data from movie API route', () => {
			request( server )
			.get( '/api/movies' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 )
			.end( function ( err, res ) {
				if ( err ) throw err;
			});
		});
	});
});
