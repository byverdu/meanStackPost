// utils file

import mongoose from 'mongoose';

const imdbApi = require( 'imdb' );
const getIdForName = require( 'name-to-imdb' );

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

const getImdbId = query => new Promise(( resolve, reject ) => {
	getIdForName( query, ( err, data ) => {
		if ( err ) reject( err );
		resolve( data );
	});
});

const getImdbData = imdbId => new Promise(( resolve, reject ) => {
	imdbApi( imdbId, ( err, data ) => {
		if ( err ) reject( err );
		resolve( data );
	});
});

const resolveImdbCall = query => new Promise(( resolve, reject ) => {
	getImdbId( query )
		.then(( imdbId ) => {
			getImdbData( imdbId )
				.then(( data ) => {
					if ( data ) {
						const tempData = objectToSave( data, imdbId, query.type );
						resolve( tempData );
					} else {
						reject( 'promise failed' );
					}
				});
		});
});

export {
	DBDisconnect,
	resolveImdbCall
};
