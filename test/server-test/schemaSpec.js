/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import { expect } from 'chai';
import mongoose from 'mongoose';
import { ImdbSchema } from '../../app/server/models/ImdbSchema';
import sampleData from '../sampleData';

let movie;
let Imdb;
let connection;
require( '../../app/server/db' );

const { imdbMovie, imdbSerie } = sampleData;

before(( done ) => {
	connection = mongoose.createConnection( 'mongodb://localhost/imdbAppTest' );
	Imdb = connection.model( 'Imdb', ImdbSchema );
	movie = new Imdb( imdbMovie );
	connection.once( 'open', () => done());
});

after(( done ) => {
	connection.close(() => done());
	mongoose.models = {};
	mongoose.modelSchemas = {};
});

describe( 'Schema test cases', () => {
	describe( 'Imdb shape', () => {
		it( 'has a title property that is a String', () => {
			expect( movie.title ).to.be.a( 'string' );
		});
		it( 'has a type property that is a String', () => {
			expect( movie.type ).to.be.a( 'string' );
		});
		it( 'has a poster property that is a String', () => {
			expect( movie.poster ).to.be.a( 'string' );
		});
		it( 'poster property will be an url to an image', () => {
			expect( movie.poster ).to.match( /^http|jpg/ );
		});
		it( 'has a rating property that is a Number', () => {
			expect( movie.rating ).to.be.a( 'string' );
		});
		it( 'has a myRating property that is a Number', () => {
			expect( movie.myRating ).to.be.a( 'string' );
		});
		it( 'has a description property that is a String', () => {
			expect( movie.description ).to.be.a( 'string' );
		});
		it( 'has a imdburl property that is a String', () => {
			expect( movie.imdburl ).to.be.a( 'string' );
		});
		it( 'has a genre property that is an Array of String', () => {
			expect( movie.genre ).to.be.instanceof( Array ).and.contains( 'Action' );
		});
		it( 'myRating property can be set', () => {
			movie.setMyRating( '8.5' );
			expect( movie.myRating ).to.equal( '8.5' );
		});
	});
	describe( 'Saving and deleting documents for Imdb', () => {
		it( 'A new movie can be saved to db', () => {
			const newImdb = new Imdb( imdbMovie );
			return newImdb.save().then(( response ) => {
				expect( response.title ).to.equal( 'Rambo' );
				Imdb.remove({ title: 'Rambo' }).exec();
			});
		});
		it( 'A saved movie can be deleted from db', () => {
			const rambo = new Imdb( imdbMovie );
			rambo.save()
				.then(() => {
					Imdb.remove({ title: 'Rambo' }).exec();
				});
			return Imdb.findOne({ title: 'Rambo' }).then(( response ) => {
				expect( response ).to.eql( null );
			});
		});
		it( 'More than one item can be added', () => {
			const rambo = new Imdb( imdbMovie );
			const castle = new Imdb( imdbSerie );
			rambo.save()
				.then(() => {
					castle.save()
						.then(() => {
							Imdb.find().then(( response ) => {
								expect( response ).to.have.length( 2 );
								Imdb.remove({ title: 'Castle' }).exec();
								Imdb.remove({ title: 'Rambo' }).exec();
							});
						});
				});
		});
	});
});
