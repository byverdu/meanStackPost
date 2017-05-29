
/* eslint-disable import/no-extraneous-dependencies*/

import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';

const browserOpts = {
	proxy: 'http://localhost:3000',
	port: 9000,
	open: false
};

gulp.task( 'browserSync', ['browserify'], () => {
	let restarted = false;

	browserSync.create();
	browserSync.init( browserOpts );

	return nodemon({
		exec: 'babel-node  ./app/bin/www',
		ext: 'pug js',
		tasks: ['browserify'],
		ignore: ['./app/client/static']
	})
		.on( 'start', () => {
			if ( restarted ) {
				setTimeout(() => {
					browserSync.reload();
				}, 4000 );
			}
		})
		.on( 'restart', () => {
			restarted = true;
		});
});
