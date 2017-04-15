/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for helper utility

import chai from 'chai';
import { util } from '../utils/index';

const expect = chai.expect;

describe( 'Util helper methods', () => {
  it( 'Util is defined', () => {
    expect( util ).to.be.an( 'object' );
  });
  it( 'Util.toNumber is defined', () => {
    expect( util.toNumber ).to.be.a( 'function' );
  });
  it( 'Util.toNumber converts a String to Number', () => {
    expect( util.toNumber( '3.4' )).to.be.eql( 3.4 );
  });
  it( 'Util.toNumber will throw an Error when trying to convert a String', () => {
    expect( util.toNumber ).to.throw( TypeError, /A string can't be converted to Number/ );
  });
});
