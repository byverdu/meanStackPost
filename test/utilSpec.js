/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for helper utility

import chai from 'chai';
import { util } from '../utils/index';
import sampleData from './sampleData';

const expect = chai.expect;
const {
  sampleMovie,
  movieDataConverted,
  splitString,
  sampleTvshow,
  tvShowDataConverted
} = sampleData;

describe( 'Util helper methods', () => {
  it( 'Util is defined', () => {
    expect( util ).to.be.an( 'object' );
  });
  xit( 'Util.toNumber is defined', () => {
    expect( util.toNumber ).to.be.a( 'function' );
  });
  xit( 'Util.toNumber converts a String to Number', () => {
    expect( util.toNumber( sampleMovie.rating )).to.be.eql( 8.7 );
  });
  xit( 'Util.toNumber will throw an Error when trying to convert a non numeric String', () => {
    expect( util.toNumber ).to.throw( TypeError, /A string can't be converted to Number/ );
  });
  it( 'Util.splitString is defined', () => {
    expect( splitString ).not.equal( undefined );
  });
  it( 'Util.splitString returns a split array', () => {
    expect( splitString( sampleMovie.genres )).to.eql(['Action', 'Adventure', 'Fantasy']);
  });
  it( 'Util.objectToSave is defined', () => {
    expect( util.objectToSave ).not.equal( undefined );
  });
  it( 'Util.objectToSave convert values from API response into mongo docs', () => {
    expect( util.objectToSave( sampleMovie )).to.eql( movieDataConverted );
  });
  it( 'Util.objectToSave adds seasons prop when is a tvShow', () => {
    expect( util.objectToSave( sampleTvshow )).to.eql( tvShowDataConverted );
  });
});
