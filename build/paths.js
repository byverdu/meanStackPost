const rootServer = './app/server';
const rootClient = './app/client';
const rootTest = './test';

module.exports = {
	srcServerTest: `${rootTest}/server-test/*Spec.js`,
	watchTest: [`${rootServer}/**/*.js`, `${rootTest}/**/*Spec.js`],
	srcClient: `${rootClient}/js/router.js`,
	destClient: `${rootClient}/app/static/`,
	bundleOutput: 'bundle.js'
};
