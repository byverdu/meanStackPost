// Angular router module

const angular = require( 'angular' );

require( 'angular-route' );
require( './controllers/homeModule' );
require( './controllers/imdbModule' );

angular.module( 'imdbApp', ['ngRoute', 'homeModule', 'imdbModule'])
  .config(['$routeProvider', '$locationProvider', ( $routeProvider, $locationProvider ) => {
	$locationProvider.html5Mode( true );
	$routeProvider.when( '/', {
		controller: 'HomeController',
		templateUrl: 'views/home'
	});
	$routeProvider.when( '/imdb/:collection', {
		controller: 'ImdbController',
		templateUrl: 'views/imdb'
	});
	$routeProvider.when( '/imdb/:collection/:id', {
		controller: 'ImdbController',
		templateUrl: 'views/item'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
