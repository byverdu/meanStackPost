import angular from 'angular';

import { buildImdbCard } from './directives';

const imdbService = require( './imdbService' );
const imdbBroadcaster = require( './imdbBroadcaster' );
const homeController = require( './homeController' );

const dependencies = [
  'imdbService',
  'imdbBroadcaster',
  '$rootScope',
  '$timeout',
  homeController
];

angular.module( 'imdbApp', [])
  .directive( 'imdbCard', buildImdbCard )
  .service( 'imdbService', imdbService )
  .factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
  .controller( 'HomeController', dependencies );
