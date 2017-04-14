module.exports = ( req, res ) => {
  res.status( 404 ).send( 'Sorry route not found' );
};
