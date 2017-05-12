// Angular router module

const angular = require( 'angular' );

require( 'angular-route' );
require( './controllers/homeModule' );
require( './controllers/movieModule' );

angular.module( 'imdbApp', ['ngRoute', 'homeModule', 'movieModule'])
  .config(['$routeProvider', '$locationProvider', ( $routeProvider, $locationProvider ) => {
	$locationProvider.html5Mode( true );
	$routeProvider.when( '/', {
		controller: 'HomeController',
		templateUrl: 'views/home'
	});
	$routeProvider.when( '/movies', {
		controller: 'MovieController',
		templateUrl: 'views/movies'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
