import angular from 'angular';

import { buildImdbCard } from './directives';

const imdbService = require( './imdbService' );
const imdbBroadcaster = require( './imdbBroadcaster' );
const homeController = require( './homeController' );
const movieController = require( './movieController.js' );

require( 'angular-ui-notification/dist/angular-ui-notification' );

const dependencies = [
	'imdbService',
	'imdbBroadcaster',
	'$rootScope',
	'$timeout',
	'Notification',
	homeController
];

angular.module( 'imdbApp', ['ui-notification'])
  .directive( 'imdbCard', buildImdbCard )
  .service( 'imdbService', ['$http', imdbService])
  .factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
  .controller( 'HomeController', dependencies )
  .controller( 'MovieController', ['imdbService', movieController]);
