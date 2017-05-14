// Angular router module

const angular = require( 'angular' );

require( 'angular-route' );
require( './controllers/homeModule' );
require( './controllers/imdbModule' );

angular.module( 'imdbApp', ['ngRoute', 'imdbModule', 'movieModule'])
  .config(['$routeProvider', '$locationProvider', ( $routeProvider, $locationProvider ) => {
	$locationProvider.html5Mode( true );
	$routeProvider.when( '/', {
		controller: 'HomeController',
		templateUrl: 'views/home'
	});
	$routeProvider.when( '/imdb/:collection', {
		controller: 'MovieController',
		templateUrl: 'views/imdb'
	});
	// $routeProvider.when( '/imdb/:collection/:id', {
	// 	controller: 'MovieController',
	// 	templateUrl: 'views/item'
	// });
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
