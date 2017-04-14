import Express from 'express';

const app = Express();

app.use( '/', require( './server/index' ));

app.listen( 3000, () => {
  console.log( 'App listening to port 3000' );
});
module.exports = app;
