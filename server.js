import Express from 'express';
import mongoose from 'mongoose';

const bodyParser = require( 'body-parser' );
const allRoutes = require( './routes/allRoutes' );
const notFoundRoute = require( './routes/404' );

require( './API/db' )();

const app = Express();

app.use( bodyParser.json());
app.use( '/', allRoutes );
app.use( notFoundRoute );

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
