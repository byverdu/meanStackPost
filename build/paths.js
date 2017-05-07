const rootServer = './server';
const rootClient = './client';
const rootTest = './test';

module.exports = {
  srcServerTest: `${rootTest}/server-test/*Spec.js`,
  watchTest: [`${rootServer}/**/*.js`, `${rootTest}/server-test/*Spec.js`],
  srcClient: `${rootClient}/modules/app.js`,
  destClient: `${rootClient}/static/`,
  bundleOutput: 'bundle.js'
};
