import Express from 'express';
import pathUtil from 'path';
import { util } from '../utils';


const bodyParser = require( 'body-parser' );
const allRoutes = require( './routes/' );
const notFoundRoute = require( './routes/404' );

if ( process.env.NODE_ENV !== 'test' ) {
  require( './db' )();
}

const app = Express();

app.set( 'views', './client/views' );
app.set( 'view engine', 'pug' );

app.use( Express.static( pathUtil.join( __dirname, '/client' )));
app.use( bodyParser.json());
app.use( '/', allRoutes );
app.use( notFoundRoute );

process.on( 'SIGINT', util.DBDisconnect ).on( 'SIGTERM', util.DBDisconnect );

module.exports = app;
