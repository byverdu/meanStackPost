// utils file

import mongoose from 'mongoose';

const imdbApi = require( 'imdb' );
const getIdForName = require( 'name-to-imdb' );

// const splitString = str => str.split( ',' ).map( item => item.trim());

// const toNumber = ( str ) => {
// 	const isNumber = Number( str );
// 	if ( isNaN( isNumber )) {
// 		throw TypeError( 'A string can\'t be converted to Number' );
// 	}
// 	return isNumber;
// };

const objectToSave = ( imdbData, urlId, type ) => {
	const imdbKeys = Object.keys( imdbData );
	const props = [
		'title', 'poster', 'rating', 'description', 'imdburl', 'genre'
	];
	const tempObj = {
		type,
		imdburl: `https://www.imdb.com/title/${urlId}`
	};

	imdbKeys.forEach(( key ) => {
		if ( props.indexOf( key ) >= 0 ) {
			tempObj[ key ] = imdbData[ key ];

			// Convert genres into arrays
			if ( key === 'genre' ) {
				tempObj[ key ] = tempObj[ key ].map( item => item.trim());
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

const getImdbData = query => new Promise(( resolve, reject ) => {
	getIdForName( query, ( errName, resName ) => {
		if ( resName ) {
			imdbApi( resName, ( errImdb, data ) => {
				if ( errImdb ) {
					reject( errImdb.stack );
				} else {
					const tempData = objectToSave( data, resName, query.type );
					resolve( tempData );
				}
			});
		} else {
			reject( errName );
		}
	});
});

export {
	DBDisconnect,
	getImdbData
};
