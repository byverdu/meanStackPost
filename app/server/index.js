import Express from 'express';
import pathUtil from 'path';
import { DBDisconnect } from '../../utils';
import { rootPath } from '../../conf';

const bodyParser = require( 'body-parser' );
const allRoutes = require( './routes' );
const notFoundRoute = require( './routes/404' );


if ( process.env.NODE_ENV !== 'test' ) {
  require( './db' )();
}

const app = Express();

app.set( 'views', './app/client/views' );
app.set( 'view engine', 'pug' );

app.use( Express.static( pathUtil.join( rootPath, '/app/client' )));
app.use( bodyParser.json());
app.use( '/', allRoutes );
app.use( notFoundRoute );

process.on( 'SIGINT', DBDisconnect ).on( 'SIGTERM', DBDisconnect );

module.exports = app;
