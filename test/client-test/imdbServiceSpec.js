/* global sinon, expect, inject */
const sampleMovie = {
	title: 'Rambo',
	year: '2008',
	contentRating: '18',
	runtime: '1h 32min',
	description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
	rating: '7.1',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	genre: [ 'Action', ' Thriller', ' War' ],
	director: 'Sylvester Stallone',
	metascore: 'N/A',
	writer: 'Art Monterastelli',
	imdburl: 'https://www.imdb.com/title/tt0462499'
};


const imdbMovie = [{
	title: 'Rambo',
	description: 'In Thailand, John Rambo joins a group of missionaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.',
	poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	rating: '7.1',
	imdburl: 'https://www.imdb.com/title/tt0462499',
	genre: ['Action', 'Thriller', 'War'],
	type: 'movie'
}];

const updatedMovie = Object.assign( imdbMovie[ 0 ], { myRating: '69' });

describe( 'imdbService', () => {
	let $imdbService;
	let $httpBackend;

	beforeEach(() => {
		module( 'imdbApp' );
		inject(( $injector, _$httpBackend_ ) => {
			$imdbService = $injector.get( 'imdbService' );
			$httpBackend = _$httpBackend_;
			$httpBackend
				.when( 'GET', './api/all/movie' )
				.respond( 200, imdbMovie );
			$httpBackend
				.when( 'PUT', './api/update/123456789' )
				.respond( 200, updatedMovie );
			$httpBackend
				.when( 'GET', './api/search?q=Rambo&t=movie' )
				.respond( 200, sampleMovie );
			$httpBackend
				.when( 'POST', './api/add' )
				.respond( 200, imdbMovie[ 0 ]);
		});
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

	describe( 'updateItem method', () => {
		it( 'is defined', () => {
			expect( $imdbService.updateItem ).not.to.eql( undefined );
		});
		it( 'should do an http request', () => {
			$imdbService.updateItem( '123456789', '69' );
			$httpBackend.expectPUT( './api/update/123456789' );
			$httpBackend.flush();
		});
		it( 'updateItem, should update an item', () => {
			$imdbService.updateItem( '123456789', '69' )
				.then(( response ) => {
					expect( response.data ).to.have.property( 'myRating' )
					.that.is.eq( '69' );
				});
			$httpBackend.flush();
		});
	});

	describe( 'getImdbData method', () => {
		it( 'is defined', () => {
			expect( $imdbService.getImdbData ).not.to.eql( undefined );
		});
		it( 'should do an http request', () => {
			$imdbService.getImdbData( 'Rambo', 'movie' );
			$httpBackend.expectGET( './api/search?q=Rambo&t=movie' );
			$httpBackend.flush();
		});
		it( 'getImdbData, should search to Imdb', () => {
			$imdbService.getImdbData( 'Rambo', 'movie' )
				.then(( response ) => {
					expect( response.data ).to.have.property( 'contentRating' )
					.that.is.eq( '18' );
				});
			$httpBackend.flush();
		});
	});

	describe( 'addItem method', () => {
		it( 'is defined', () => {
			expect( $imdbService.addItem ).not.to.eql( undefined );
		});
		it( 'should do an http request', () => {
			$imdbService.addItem( imdbMovie[ 0 ]);
			$httpBackend.expectPOST( './api/add' );
			$httpBackend.flush();
		});
		it( 'addItem, should search to Imdb', () => {
			$imdbService.addItem( imdbMovie[ 0 ])
				.then(( response ) => {
					expect( response.data ).to.have.property( 'title' )
					.that.is.eq( 'Rambo' );
				});
			$httpBackend.flush();
		});
	});
});
