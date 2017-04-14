/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import chai from 'chai';
import mongoose from 'mongoose';
import MovieSchema from '../API/models/movies';
import sampleData from './sampleData';

const expect = chai.expect;
let connection;
let Movie;
let movie;
const { movieData } = sampleData;

before(( done ) => {
  connection = mongoose.createConnection( 'mongodb://127.0.0.1/example-test' );
  Movie = connection.model( 'Movie', MovieSchema );
  movie = new Movie( movieData );
  connection.once( 'open', () => done());
});

after(( done ) => {
  connection.close(() => done());
  mongoose.models = {};
  mongoose.modelSchemas = {};
});

describe( 'Schema test cases', () => {
  describe( 'MovieSchema shape', () => {
    it( 'has a title property that is a String', () => {
      expect( movie.title ).to.be.a( 'string' );
    });
    it( 'has a poster property that is a String', () => {
      expect( movie.poster ).to.be.a( 'string' ).and.contains( '.jpg' );
    });
    it( 'has a rating property that is a Number', () => {
      expect( movie.rating ).to.be.a( 'number' );
    });
    it( 'has a myRating property that is a Number', () => {
      expect( movie.myRating ).to.be.a( 'number' );
    });
  });
});
