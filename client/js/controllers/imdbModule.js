import angular from 'angular';

const imdbService = require( '../services/imdbService' );
const imdbBroadcaster = require( '../services/imdbBroadcaster' );
const movieController = require( './imdbController' );

require( 'angular-ui-notification/dist/angular-ui-notification' );

const dependencies = [
	'imdbService',
	'$routeParams',
	'imdbBroadcaster',
	'$rootScope',
	'$timeout',
	movieController
];

angular.module( 'imdbModule', ['ui-notification'])
	.service( 'imdbService', ['$http', imdbService])
	.factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
	.controller( 'MovieController', dependencies );
