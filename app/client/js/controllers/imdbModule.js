import angular from 'angular';

const imdbService = require( '../services/imdbService' );
const imdbBroadcaster = require( '../services/imdbBroadcaster' );
const imdbController = require( './imdbController' );

require( 'angular-ui-notification/dist/angular-ui-notification' );

const dependencies = [
	'imdbService',
	'$routeParams',
	'imdbBroadcaster',
	'$rootScope',
	'$timeout',
	'Notification',
	imdbController
];

angular.module( 'imdbModule', ['ui-notification'])
	.service( 'imdbService', ['$http', imdbService])
	.factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
	.controller( 'ImdbController', dependencies );
