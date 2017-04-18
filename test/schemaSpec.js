/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import chai from 'chai';
import mongoose from 'mongoose';
import MovieSchema from '../API/models/MovieSchema';
import ShowSchema from '../API/models/ShowSchema';
import { BaseModel } from '../API/models/BaseSchema';
import sampleData from './sampleData';

const expect = chai.expect;
let connection;
let Movie;
let movie;
let TVShow;
let tvShow;

const { movieData, showData } = sampleData;

before(( done ) => {
  connection = mongoose.createConnection( 'mongodb://localhost/imdbApp' );
  Movie = BaseModel.discriminator( 'Movie', MovieSchema );
  TVShow = BaseModel.discriminator( 'TVShow', ShowSchema );
  movie = new Movie( movieData );
  tvShow = new TVShow( showData );
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
    it( 'has a year property that is a Number', () => {
      expect( movie.year ).to.be.a( 'number' );
    });
    it( 'has a imdburl property that is a String', () => {
      expect( movie.imdburl ).to.be.a( 'string' ).and.contains( 'https' );
    });
    it( 'has a genres property that is an Array of String', () => {
      expect( movie.genres ).to.be.instanceof( Array ).and.contains( 'Action' );
    });
    it( 'has a actors property that is an Array of String', () => {
      expect( movie.actors ).to.be.instanceof( Array ).and.contains( 'Michael Herz' );
    });
  });
  describe( 'TvShowSchema shape', () => {
    it( 'has a seasons property that is a Number', () => {
      expect( tvShow.seasons ).to.be.a( 'Number' );
    });
  });
});
