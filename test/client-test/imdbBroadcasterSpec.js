/* global sinon, expect */
describe( 'imdbBroadcaster', () => {
	let imdbBroadcaster;
	let $rootScope;
	// let $controller;
	let imdb = {
	"title": "Rambo",
	"year": 2008,
	"genres": [
		"Action",
		"Thriller",
		"War"
	],
	"actors": [
		"Sylvester Stallone",
		"Julie Benz",
		"Matthew Marsden",
		"Graham McTavish"
	],
	"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
	"rating": "7.1",
	"imdburl": "https://www.imdb.com/title/tt0462499"
};

	beforeEach(function () {
		module( 'imdbApp' );
		inject(function ($injector) {
			imdbBroadcaster = $injector.get( 'imdbBroadcaster' );
			$rootScope = $injector.get( '$rootScope' );
			// $controller = $injector.get( 'HomeController' );
		}); 
		sinon.spy($rootScope, '$emit' );
		sinon.spy($rootScope, '$on' );
	});

	it( 'is defined', () => {
		expect( imdbBroadcaster.itemSearched ).not.to.eql( undefined );
	});
	xit( 'should broadcast', () => {
		imdbBroadcaster.itemSearched();
		expect( $rootScope.$emit ).notCalled;
	});
});
