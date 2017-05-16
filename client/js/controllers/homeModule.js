import angular from 'angular';

import { buildImdbCard } from '../services/directives';

const imdbService = require( '../services/imdbService' );
const imdbBroadcaster = require( '../services/imdbBroadcaster' );
const homeController = require( './homeController' );

require( 'angular-ui-notification/dist/angular-ui-notification' );

const dependencies = [
	'imdbService',
	'imdbBroadcaster',
	'$rootScope',
	'$timeout',
	'Notification',
	homeController
];

angular.module( 'homeModule', ['ui-notification'])
  .directive( 'imdbCard', buildImdbCard )
  .service( 'imdbService', ['$http', imdbService])
  .factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
  .controller( 'HomeController', dependencies );
