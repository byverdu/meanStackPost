/* global sinon, expect, inject */
describe( 'imdbService', () => {
	let $imdbService;
	let $httpBackend;

	const imdbMovie = [{
		title: 'Rambo',
		description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
		poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
		rating: '7.1',
		imdburl: 'https://www.imdb.com/title/tt0462499',
		genre: ['Action', 'Thriller', 'War'],
		type: 'movie'
	}];

	beforeEach(() => {
		module( 'imdbApp' );
		inject(( $injector, _$httpBackend_ ) => {
			$imdbService = $injector.get( 'imdbService' );
			$httpBackend = _$httpBackend_;
			$httpBackend.when( 'GET', './api/all/movie' )
			.respond( 200, imdbMovie );
		});
		// sinon.spy($rootScope, '$emit' );
		// sinon.spy($rootScope, '$on' );
	});

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it( 'is defined', () => {
		expect( $imdbService ).not.to.eql( undefined );
	});
	describe( 'getAPIData method', () => {
		it( 'is defined', () => {
			expect( $imdbService.getAPIData ).not.to.eql( undefined );
		});
		it( 'should do an http request', () => {
			$imdbService.getAPIData( 'movie' );
			$httpBackend.expectGET( './api/all/movie' );
			$httpBackend.flush();
		});
		it( 'getAPIData, should return movies or series', () => {
			$imdbService.getAPIData( 'movie' )
				.then(( response ) => {
					expect( response.data ).to.be.an( 'Array' );
					expect( response.data[ 0 ]).to.have.property( 'title' )
					.that.is.eq( 'Rambo' );
				});
			$httpBackend.flush();
		});
	});
});
