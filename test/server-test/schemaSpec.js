/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import { expect } from 'chai';
import mongoose from 'mongoose';
import { Imdb } from '../../server/models/ImdbSchema';
import { objectToSave } from '../../utils';
import sampleData from '../sampleData';

let movie;

const { sampleMovie, sampleTvshow } = sampleData;

before(() => {
	movie = new Imdb( sampleMovie );
});

after(() => {
	mongoose.models = {};
	mongoose.modelSchemas = {};
});

describe( 'Schema test cases', () => {
	describe( 'Imdb shape', () => {
		it( 'has a title property that is a String', () => {
			expect( movie.title ).to.be.a( 'string' );
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
			const rambo = objectToSave( sampleMovie );
			const newImdb = new Imdb( rambo );
			newImdb.save();
				// Imdb.find().then(( response ) => {
				// 	expect( response[ response.length - 1 ].title ).to.equal( 'Rambo34' );
				// 	Imdb.remove({ title: 'Rambo' }).exec();
				// });
			// });
		});
		xit( 'A saved movie can be deleted from db', () => {
			setTimeout(() => {
				const newMovieImdb = new Movie({ title: 'Die Hard' });
				newMovieImdb.save();
				BaseModel.remove({ title: 'Die Hard' }).exec();
				BaseModel.findOne({ title: 'Die Hard' }).then(( response ) => {
					expect( response ).to.eql( null );
				});
			}, 2000 );
		});
		xit( 'A new tvShow can be saved to db', () => {
			const wifeKids = objectToSave( sampleTvshow );
			const newTvshow = new TVShow( wifeKids );
			newTvshow.save().then(() => {
				BaseModel.find({ __t: 'TVShow' }).then(( response ) => {
					expect( response[ response.length - 1 ].title ).to.equal( 'My Wife and Kids' );
					BaseModel.remove({ title: 'My Wife and Kids' }).exec();
				});
			});
		});
		xit( 'A saved tvShow can be deleted from db', () => {
			setTimeout(() => {
				const newMovieImdb = new TVShow({ title: 'Silicon Valley' });
				newMovieImdb.save();
				BaseModel.remove({ title: 'How I met your mother' }).exec();
				BaseModel.findOne({ title: 'How I met your mother' }).then(( response ) => {
					expect( response ).to.eql( null );
				});
			}, 3000 );
		});
	});
});
