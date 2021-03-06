/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
// Test cases for routing

import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import { ImdbSchema } from '../../app/server/models/ImdbSchema';
import server from '../../app/server/';
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
			done();
		});
	serie.save();
});

after(() => {
	Imdb.remove({ title: 'Rambo' }).exec();
	Imdb.remove({ title: 'Castle' }).exec();
});

describe( 'Routing test cases', () => {
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
		it( 'a new movie can be add', ( done ) => {
			request( server )
			.post( '/api/add' )
			.send({ data: imdbMovie })
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body.data ).to.eql( 'Rambo has been saved' );
				done();
			});
		});
		it( 'a new movie can be updated', ( done ) => {
			request( server )
			.put( `/api/update/${movieId}` )
			.send({ rating: '5.6' })
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body.data ).to.eql( '5.6 rating for Rambo has been saved' );
				done();
			});
		});
		it( 'a movie can be deleted', ( done ) => {
			request( server )
			.delete( `/api/delete/${movieId}` )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body.data ).to.eql( 'Rambo has been deleted' );
				done();
			});
		});
		it( 'A movie can be searched', ( done ) => {
			request( server )
			.post( '/api/search/' )
			.query( 'q=Rambo' )
			.query( 't=movie' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body ).to.eql( imdbMovie );
				done();
			});
		}).timeout( 7000 );
		it( 'A serie can be searched', ( done ) => {
			request( server )
			.post( '/api/search/' )
			.query( 'q=Castle' )
			.query( 't=series' )
			.expect( 200 )
			.end(( err, res ) => {
				console.log(res)
				if ( err ) done( err );
				expect( res.type ).to.include( 'json' );
				expect( res.body ).to.be.an( 'object' );
				expect( res.body ).to.eql( imdbSerie );
				done();
			});
		}).timeout( 7000 );
	});

	describe( 'Route getters', () => {
		it( 'Root page', ( done ) => {
			request( server )
			.get( '/' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.text ).to.include( 'Awesome Imdb' );
				done();
			});
		});
		it( 'Collections page', ( done ) => {
			request( server )
			.get( '/imdb/movies' )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.text ).to.include( 'Awesome Imdb' );
				done();
			});
		});
		it( 'Single item page', ( done ) => {
			request( server )
			.get( `/imdb/movies/${movieId}` )
			.expect( 200 )
			.end(( err, res ) => {
				if ( err ) done( err );
				expect( res.text ).to.include( 'Awesome Imdb' );
				done();
			});
		});
	});
});
