/* eslint-disable import/no-extraneous-dependencies*/
// Test cases for helper utility

import { expect } from 'chai';
import { resolveImdbCall } from '../../utils/index';
import sampleData from '../sampleData';

const {
	sampleTvshow,
	imdbSerie,
	getImdbId,
	getImdbData
} = sampleData;
const query = {
	name: 'castle',
	type: 'series'
};

describe( 'Util helper methods', () => {
	it( 'Util.getImdbId is defined', () => {
		expect( getImdbId ).not.equal( undefined );
	});
	it( 'Util.getImdbId returns id for an Imdb search', () => {
		return getImdbId( query )
			.then(( data ) => {
				expect( data ).to.eql( 'tt1219024' );
			});
	});
	it( 'Util.getImdbData is defined', () => {
		expect( getImdbData ).not.equal( undefined );
	});
	it( 'Util.getImdbData returns the imdb data', ( done ) => {
		getImdbData( 'tt1219024' )
			.then(( imdbData ) => {
				expect( imdbData ).to.eql( sampleTvshow );
				done();
			})
			.catch( done );
	}).timeout( 4000 );
	it( 'Util.resolveImdbCall is defined', () => {
		expect( resolveImdbCall ).not.equal( undefined );
	});
	it( 'Util.resolveImdbCall returns id for an Imdb search', ( done ) => {
		resolveImdbCall( query )
			.then(( resp ) => {
				expect( resp ).to.eql( imdbSerie );
				done();
			})
			.catch( done );
	}).timeout( 4000 );
});
