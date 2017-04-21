/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for Mongo Schemas

import chai from 'chai';
import mongoose from 'mongoose';
import { BaseModel, BaseSchema } from '../API/models/BaseSchema';
import Movie from '../API/models/MovieSchema';
import TVShow from '../API/models/ShowSchema';
import { util } from '../utils';
import sampleData from './sampleData';

require( '../API/db' )();

const expect = chai.expect;
let movie;
let tvShow;
let baseModel;

const { movieData, showData, newMovie, sampleTvshow } = sampleData;

before(() => {
  movie = new Movie( movieData );
  tvShow = new TVShow( showData );
  baseModel = new BaseModel();
});

after(() => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
});

describe( 'Schema test cases', () => {
  describe( 'BaseSchema shape', () => {
    it( 'has a title property that is a String', () => {
      expect( baseModel.title ).to.be.a( 'string' );
    });
    it( 'has a poster property that is a String', () => {
      expect( baseModel.poster ).to.be.a( 'string' );
    });
    it( 'has a rating property that is a Number', () => {
      expect( baseModel.rating ).to.be.a( 'string' );
    });
    it( 'has a myRating property that is a Number', () => {
      expect( baseModel.myRating ).to.be.a( 'string' );
    });
    it( 'has a year property that is a Number', () => {
      expect( baseModel.year ).to.be.a( 'number' );
    });
    it( 'has a imdburl property that is a String', () => {
      expect( baseModel.imdburl ).to.be.a( 'string' );
    });
    it( 'has a genres property that is an Array of String', () => {
      expect( baseModel.genres ).to.be.instanceof( Array );
    });
    it( 'has a actors property that is an Array of String', () => {
      expect( baseModel.actors ).to.be.instanceof( Array );
    });
  });
  describe( 'MovieSchema shape', () => {
    it( 'is an instance of BaseSchema', () => {
      expect( Movie.schema ).to.be.an.instanceof( BaseSchema );
    });
    it( 'has the same properties than the BaseSchema', () => {
      const schemaKeys = Object.keys( baseModel );
      const movieKeys = Object.keys( movie );
      expect( movieKeys ).to.be.eql( schemaKeys );
    });
    it( 'poster property will be an url to an image', () => {
      expect( movie.poster ).to.match( /^http|jpg/ );
    });
    it( 'imdburl property will be an url', () => {
      expect( movie.imdburl ).to.include( 'https' );
    });
    it( 'has a genres property that is an Array of String', () => {
      expect( movie.genres ).to.be.instanceof( Array ).and.contains( 'Action' );
    });
    it( 'has a actors property that is an Array of String', () => {
      expect( movie.actors ).to.be.instanceof( Array ).and.contains( 'Michael Herz' );
    });
  });
  describe( 'TvShowSchema shape', () => {
    it( 'is an instance of BaseSchema', () => {
      expect( TVShow.schema ).to.be.an.instanceof( BaseSchema );
    });
    it( 'has a seasons property that is a Number', () => {
      expect( tvShow.seasons ).to.be.a( 'Number' );
    });
  });
  describe( 'Saving new documents, movie or tvShow', () => {
    it( 'A new movie can be saved to db', () => {
      const trainspotting = util.objectToSave( newMovie );
      const newMovieImdb = new Movie( trainspotting );
      newMovieImdb.save().then(() => {
        BaseModel.find({ __t: 'Movie' }).then(( response ) => {
          expect( response[ response.length - 1 ].title ).to.equal( 'Trainspotting' );
          BaseModel.remove({ title: 'Trainspotting' }).exec();
        });
      });
    });
    it( 'A new tvShow can be saved to db', () => {
      const wifeKids = util.objectToSave( sampleTvshow );
      const newTvshow = new TVShow( wifeKids );
      newTvshow.save().then(() => {
        BaseModel.find({ __t: 'TVShow' }).then(( response ) => {
          expect( response[ response.length - 1 ].title ).to.equal( 'My Wife and Kids' );
          BaseModel.remove({ title: 'My Wife and Kids' }).exec();
        });
      });
    });
  });
});
