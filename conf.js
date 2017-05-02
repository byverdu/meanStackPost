import pathUtil from 'path';

// setup for global path
const includeModule = ( path ) => {
  const pathModule = pathUtil.join( __dirname, `${path}` );
  return require( pathModule );
};

const rootPath = __dirname;

const dbDevelopment = 'mongodb://localhost/imdbApp';

const dbTest = 'mongodb://localhost/imdbAppTest';


export {
  includeModule,
  rootPath,
  dbDevelopment,
  dbTest
};
