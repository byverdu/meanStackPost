module.exports = function ( $rootScope ) {
  return {
    itemSearched( item ) {
      $rootScope.$emit( 'item:searched', item );
    }
  };
};
