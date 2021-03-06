// Karma configuration

module.exports = ( config ) => {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['browserify', 'mocha', 'chai', 'sinon'],


		// list of files / patterns to load in the browser
		files: [
			'node_modules/angular/angular.min.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'app/client/static/bundle.js',
			'test/client-test/*Spec.js'
		],


		// list of files to exclude
		exclude: [
		],

		browserify: {
			debug: true,
			transform: [
				['babelify', { plugin: ['babel-plugin-es2015'] }]
			]
		},

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'client/js/router.js': ['browserify']
			// 'src/js/services/utils.js': ['browserify']
		},

		plugins: [
			'karma-browserify',
			'karma-mocha',
			'karma-chai',
			'karma-spec-reporter',
			'karma-chrome-launcher',
			'karma-babel-preprocessor',
			'karma-sinon'],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
