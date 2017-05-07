const rootServer = './server';
const rootClient = './client';
const rootTest = './test';

module.exports = {
  srcTest: `${rootTest}/*Spec.js`,
  watchTest: [`${rootServer}/**/*.js`, `${rootTest}/*Spec.js`],
  srcClient: `${rootClient}/modules/index.js`,
  destClient: `${rootClient}/static/`,
  bundleOutput: 'bundle.js'
};
