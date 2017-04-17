const splitString = str => str.split( ',' ).map( item => item.trim());

const toNumber = ( str ) => {
  const isNumber = Number( str );
  if ( isNaN( isNumber )) {
    throw TypeError( 'A string can\'t be converted to Number' );
  }
  return isNumber;
};

exports.util = {

  objectToSave: ( movieData ) => {
    const movieKeys = Object.keys( movieData );
    const props = [
      'title', 'poster', 'rating', 'year', 'imdburl', 'genres', 'actors'
    ];
    const tempObj = {};

    movieKeys.forEach(( key ) => {
      if ( props.indexOf( key ) >= 0 ) {
        tempObj[ key ] = movieData[ key ];

        if ( key === 'genres' || key === 'actors' ) {
          tempObj[ key ] = splitString( movieData[ key ]);
        }
      }
    });
    return tempObj;
  }
};
