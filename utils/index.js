exports.util = {
  toNumber: ( str ) => {
    const isNumber = Number( str );
    if ( isNaN( isNumber )) {
      throw TypeError( 'A string can\'t be converted to Number' );
    }
    return isNumber;
  },

  splitString: str => str.split( ',' ).map( item => item.trim())
};
