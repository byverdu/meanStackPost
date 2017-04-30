import pathUtil from 'path';

// setup for global path
module.exports = {
  includeModule: ( path ) => {
    const pathModule = pathUtil.join( __dirname, `${path}` );
    return require( pathModule );
  },

  dbDevelopment: 'mongodb://localhost/imdbApp',

  dbTest: 'mongodb://localhost/imdbAppTest'
};
