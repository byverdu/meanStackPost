import angular from 'angular';

const imdbService = require( './imdbService.js' );

angular.module( 'imdbApp', [])
  .factory( 'imdbListener', ['$rootScope', function ( $rootScope ) {
    const abc = {};
    abc.itemAdded = function ( item ) {
      console.log(item, 'imdbService.js')
      $rootScope.$emit( 'item:added', item );
    };
    return abc;
  }])
  .service( 'imdbService', imdbService )
  .controller( 'HomeController', ['imdbService', 'imdbListener', '$rootScope', '$timeout', function ( service, imdbListener, $rootScope, $timeout ) {
    const $home = this;
    $home.title = 'Welcome to ImdbApp';
    $home.imdbText = '';
    $home.imdbData = {};
    $rootScope.$on( 'item:added', function ( event, item ) {
      $timeout(() => {
          $home.imdbData = item;
        }, 1000 );
    });
    $home.callImdbApi = function () {
      service.getImdbData( this.imdbText )
        .then( response => imdbListener.itemAdded( response ));
    };
  }]);
