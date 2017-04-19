import Express from 'express';
import mongoose from 'mongoose';

const bodyParser = require( 'body-parser' );
const indexRoute = require( './routes/index' );
const notFoundRoute = require( './routes/404' );
const movies = require( './routes/movies' );
const tvshows = require( './routes/tvshows' );

require( './API/db' )();

const app = Express();

app.use( bodyParser.json());
app.use( '/', indexRoute );
app.post( '/', ( req, res ) => {
  if ( req.body.type === 'movie' ) {
    res.send( 'new movies added' );
  }
  if ( req.body.type === 'tvshow' ) {
    res.send( 'new tvshow added' );
  }
});
app.get( '/movies', movies );
app.get( '/tvshows', tvshows );
app.use( notFoundRoute );
// app.use( bodyParser.urlencoded({ extended: false }));

app.listen( 3000, () => {
  console.log( 'App listening to port 3000' );
});

function DBDisconnect() {
  mongoose.connection.close(() => {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
}

process.on( 'SIGINT', DBDisconnect ).on( 'SIGTERM', DBDisconnect );
module.exports = app;
