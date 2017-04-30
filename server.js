import Express from 'express';
import pathUtil from 'path';
import { util } from './utils';

// setup for global path
global.include_module = ( path ) => {
  const pathModule = pathUtil.join( __dirname, `${path}` );
  return require( pathModule );
};

const bodyParser = require( 'body-parser' );
const allRoutes = require( './server/routes/' );
const notFoundRoute = require( './server/routes/404' );

if ( process.env.NODE_ENV !== 'test' ) {
  require( './server/db' )();
}

const app = Express();

app.set( 'views', './client/views' );
app.set( 'view engine', 'pug' );

app.use( Express.static( pathUtil.join( __dirname, '/client' )));
app.use( bodyParser.json());
app.use( '/', allRoutes );
app.use( notFoundRoute );

app.listen( 3000, () => {
  console.log( 'App listening to port 3000' );
});

process.on( 'SIGINT', util.DBDisconnect ).on( 'SIGTERM', util.DBDisconnect );
module.exports = app;
