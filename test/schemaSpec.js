/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import chai from 'chai';
import mongoose from 'mongoose';
import Movie from '../API/models/MovieSchema';
import TVShow from '../API/models/ShowSchema';
import sampleData from './sampleData';

require( '../API/db' )();

const expect = chai.expect;
let movie;
let tvShow;

const { movieData, showData } = sampleData;

before(() => {
  movie = new Movie( movieData );
  tvShow = new TVShow( showData );
});

after(() => {
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
