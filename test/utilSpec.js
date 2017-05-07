/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for helper utility

import { expect } from 'chai';
import { objectToSave } from '../utils/index';
import sampleData from './sampleData';

const {
  sampleMovie,
  movieDataConverted,
  splitString,
  sampleTvshow,
  tvShowDataConverted
} = sampleData;

describe( 'Util helper methods', () => {
  it( 'Util.splitString is defined', () => {
    expect( splitString ).not.equal( undefined );
  });
  it( 'Util.splitString returns a split array', () => {
    expect( splitString( sampleMovie.genres )).to.eql(['Action', 'Adventure', 'Fantasy']);
  });
  it( 'Util.objectToSave is defined', () => {
    expect( objectToSave ).not.equal( undefined );
  });
  it( 'Util.objectToSave convert values from API response into mongo docs', () => {
    expect( objectToSave( sampleMovie )).to.eql( movieDataConverted );
  });
  it( 'Util.objectToSave adds seasons prop when is a tvShow', () => {
    expect( objectToSave( sampleTvshow )).to.eql( tvShowDataConverted );
  });
});
