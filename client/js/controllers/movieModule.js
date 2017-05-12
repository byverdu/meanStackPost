import angular from 'angular';

import { buildImdbCard } from '../services/directives';

const imdbService = require( '../services/imdbService' );
const imdbBroadcaster = require( '../services/imdbBroadcaster' );
const movieController = require( './movieController' );

require( 'angular-ui-notification/dist/angular-ui-notification' );

angular.module( 'movieModule', ['ui-notification'])
  // .directive( 'imdbCard', buildImdbCard )
  .service( 'imdbService', ['$http', imdbService])
  .factory( 'imdbBroadcaster', ['$rootScope', imdbBroadcaster])
  .controller( 'MovieController', ['imdbService', movieController]);
