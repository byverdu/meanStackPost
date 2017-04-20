// mongodb connection
const uriUtil = require( 'mongodb-uri' );
const mongoose = require( 'mongoose' );

module.exports = function () {
  const options = {
    server: {
      socketOptions: {
        keepAlive: 1,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 1,
        connectTimeoutMS: 30000
      }
    }
  };
  let dbURL;

  if ( process.env.NODE_ENV === 'development' ) {
    dbURL = 'mongodb://localhost/imdbApp';
  }

  if ( process.env.NODE_ENV === 'test' ) {
    dbURL = 'mongodb://localhost/imdbAppTest';
  }

  if ( process.env.NODE_ENV === 'production' ) {
    dbURL = process.env.MONGO_IMDB_URL;
  }

  const mongooseUri = uriUtil.formatMongoose( dbURL ); // formatting url for better parsing

  mongoose.connect( mongooseUri, options );

  console.log( 'database file called' );
};
