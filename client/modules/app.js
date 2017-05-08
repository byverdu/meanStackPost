import angular from 'angular';

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
  .service( 'imdbService', imdbService )
  .factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
  .controller( 'HomeController', dependencies );
