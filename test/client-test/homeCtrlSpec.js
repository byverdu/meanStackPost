/* global inject, expect */

describe( 'HomeController', () => {
  beforeEach( module( 'imdbApp' ));
  let $controller;
  let $scope;

  beforeEach( inject( function ( _$rootScope_, _$controller_ ) {
    $scope = _$rootScope_.$new();
    $controller = _$controller_( 'HomeController', { $scope });
  }));

  describe( 'HomeController', () => {
    it( 'is defined', () => {
      expect( $controller ).not.eq( undefined );
    });
  });
});
