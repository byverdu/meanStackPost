/* global inject, expect */

describe( 'imdbApp Home Page', () => {
  beforeEach( module( 'imdbApp' ));
  let $controller;

  beforeEach( inject(( _$controller_ ) => {
    $controller = _$controller_( 'HomeController' );
  }));

  describe( 'HomeController', () => {
    it( 'is defined', () => {
      expect( $controller ).not.eq( undefined );
    });
    it( '$scope has a title property', () => {
      expect( $controller.title ).to.equal( 'Welcome to ImdbApp' );
    });
    it( '$scope has a imdbText property', () => {
      expect( $controller.imdbText ).to.equal( '' );
    });
    it( '$scope has a imdbData property', () => {
      expect( $controller.imdbData ).to.be.an( 'object' );
    });
    it( 'callImdbApi will call to Imdb API', () => {
      expect( $controller.callImdbApi ).to.be.a( 'Function' );
    });
  });
});
