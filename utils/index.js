// utils file

import mongoose from 'mongoose';

const splitString = str => str.split( ',' ).map( item => item.trim());

const toNumber = ( str ) => {
  const isNumber = Number( str );
  if ( isNaN( isNumber )) {
    throw TypeError( 'A string can\'t be converted to Number' );
  }
  return isNumber;
};

const objectToSave = ( imdbData ) => {
  const imdbKeys = Object.keys( imdbData );
  const props = [
    'title', 'poster', 'rating', 'year', 'imdburl', 'genres', 'actors'
  ];
  const tempObj = {};

  imdbKeys.forEach(( key ) => {
    if ( props.indexOf( key ) >= 0 ) {
      tempObj[ key ] = imdbData[ key ];

      // Convert genres and actors into arrays
      if ( key === 'genres' || key === 'actors' ) {
        tempObj[ key ] = splitString( imdbData[ key ]);
      }
      // add number seasons prop for tvshows
      if ( imdbData.series ) {
        tempObj.seasons = imdbData.totalseasons;
      }
    }
  });
  return tempObj;
};

const DBDisconnect = () => {
  mongoose.connection.close(() => {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
};

export {
  objectToSave,
  DBDisconnect
};
