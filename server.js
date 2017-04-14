import Express from 'express';

const indexRoute = require( './routes/index' );
const notFoundRoute = require( './routes/404' );

const app = Express();

app.use( '/', indexRoute );
app.use( notFoundRoute );

app.listen( 3000, () => {
  console.log( 'App listening to port 3000' );
});
module.exports = app;
