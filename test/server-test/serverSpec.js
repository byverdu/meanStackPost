/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
// Test cases for routing

import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import { ImdbSchema } from '../../server/models/ImdbSchema';
import server from '../../server/';
import sampleData from '../sampleData';

let movie;
let movieId;
let serie;
let Imdb;
const { imdbMovie, imdbSerie } = sampleData;

before(( done ) => {
	Imdb = mongoose.model( 'Imdb', ImdbSchema );
	movie = new Imdb( imdbMovie );
	serie = new Imdb( imdbSerie );

	movie.save()
		.then(( imdb ) => {
			movieId = imdb._id;
			console.log(movieId)
			done();
		});
	serie.save();
});

after(() => {
	Imdb.remove({ title: 'Rambo' }).exec();
	Imdb.remove({ title: 'Castle' }).exec();
});

describe( 'Routing test cases', () => {
	describe( 'Root route', () => {
		it( 'Visiting the root path should return 200', ( done ) => {
			request( server )
			.get( '/' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.text ).to.include( 'Awesome Imdb' );
				done();
			});
		});
	});

	describe( 'Api endpoint', () => {
		it( 'should get all movies', ( done ) => {
			request( server )
			.get( '/api/all/movie' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'array' );
				expect( res.body[ 0 ].type ).to.eql( 'movie' );
				done();
			});
		});
		it( 'should get all series', ( done ) => {
			request( server )
			.get( '/api/all/series' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'array' );
				expect( res.body[ 0 ].type ).to.eql( 'series' );
				done();
			});
		});
		it( 'should get an item by id', ( done ) => {
			request( server )
			.get( `/api/item/${movieId}` )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body.title ).to.eql( 'Rambo' );
				done();
			});
		});
	});

	xdescribe( 'Movies route', () => {
		it( 'Movies route should return 200', () => {
			request( server )
			.get( '/imdb' )
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

	xdescribe( 'TVShow route', () => {
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

	xdescribe( 'Post request', () => {
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

	xdescribe( 'Not Found route', () => {
		it( 'Visiting a not known route should return 404', () => {
			request( server )
			.get( '/notFound' )
			.expect( 404 )
			.then( response => expect( response.text ).to.equal( 'Sorry route not found' ));
		});
	});

	xdescribe( 'API route', () => {
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
