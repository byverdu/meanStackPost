import angular from 'angular';

const imdbService = require( './imdbService.js' );

angular.module( 'imdbApp', [])
  .service( 'imdbService', imdbService )
  .controller( 'HomeController', ['imdbService', function ( imdbService ) {
    this.title = 'Welcome to ImdbApp';
    this.imdbText = '';
    this.callImdbApi = function () {
      console.log(this.imdbText);
      imdbService.getImdbData( this.imdbText );
    };
    // console.log( imdbService() )
  }]);
