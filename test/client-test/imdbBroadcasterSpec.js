/* global sinon */
xdescribe( 'imdbBroadcaster', () => {
	let imdbBroadcaster;
	let $rootScope;
	let $controller;
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
			$controller = $injector.get( 'HomeController' );
		}); 
		sinon.spy($rootScope, '$broadcast' );
		sinon.spy($rootScope, '$on' );
	});

	it( 'should broadcast', () => {
		console.log($controller);
		sinon.stub( $rootScope.$broadcast );
		imdbBroadcaster.addItem( imdb );
		expect($rootScope.$broadcast).toHaveBeenCalled()
	})
});
