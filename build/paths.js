const rootServer = './server';
const rootClient = './client';
const rootTest = './test';

module.exports = {
  srcTest: `${rootTest}/*Spec.js`,
  watchTest: [`${rootServer}/**/*.js`, `${rootTest}/*Spec.js`]
};
