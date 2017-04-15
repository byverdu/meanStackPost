/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for helper utility

import chai from 'chai';
import { util } from '../utils/index';
import sampleData from './sampleData';

const expect = chai.expect;
const { sampleMovie } = sampleData;

describe( 'Util helper methods', () => {
  it( 'Util is defined', () => {
    expect( util ).to.be.an( 'object' );
  });
  it( 'Util.toNumber is defined', () => {
    expect( util.toNumber ).to.be.a( 'function' );
  });
  it( 'Util.toNumber converts a String to Number', () => {
    expect( util.toNumber( sampleMovie.rating )).to.be.eql( 8.7 );
  });
  it( 'Util.toNumber will throw an Error when trying to convert a non numeric String', () => {
    expect( util.toNumber ).to.throw( TypeError, /A string can't be converted to Number/ );
  });
  it( 'Util.splitString is defined', () => {
    expect( util.splitString ).not.equal( undefined );
  });
  it( 'Util.splitString returns a split array', () => {
    expect( util.splitString( sampleMovie.genres )).to.eql(['Action', 'Adventure', 'Fantasy']);
  });
});
