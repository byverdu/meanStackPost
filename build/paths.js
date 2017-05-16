const rootServer = './server';
const rootClient = './client';
const rootTest = './test';

module.exports = {
	srcServerTest: `${rootTest}/server-test/*Spec.js`,
	watchTest: [`${rootServer}/**/*.js`, `${rootTest}/**/*Spec.js`],
	srcClient: `${rootClient}/js/router.js`,
	destClient: `${rootClient}/static/`,
	bundleOutput: 'bundle.js'
};
