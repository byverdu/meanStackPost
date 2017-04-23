import Express from 'express';
import { util } from './utils';

const bodyParser = require( 'body-parser' );
const allRoutes = require( './routes/allRoutes' );
const notFoundRoute = require( './routes/404' );

if ( process.env.NODE_ENV !== 'test' ) {
  require( './API/db' )();
}

const app = Express();

app.use( bodyParser.json());
app.use( '/', allRoutes );
app.use( notFoundRoute );

app.listen( 3000, () => {
  console.log( 'App listening to port 3000' );
});

process.on( 'SIGINT', util.DBDisconnect ).on( 'SIGTERM', util.DBDisconnect );
module.exports = app;
