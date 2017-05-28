/* eslint-disable import/no-extraneous-dependencies*/

const gulp = require( 'gulp' );
const browserify = require( 'browserify' );
const uglify = require( 'gulp-uglify' );
const source = require( 'vinyl-source-stream' );
const gutil = require( 'gulp-util' );
const buffer = require( 'vinyl-buffer' );
const sourcemaps = require( 'gulp-sourcemaps' );
const notify = require( 'gulp-notify' );
const babelify = require( 'babelify' );
const paths = require( '../paths' );

gulp.task( 'browserify', () => {
	// set up the browserify instance on a task basis
	const b = browserify({
		entries: paths.srcClient,
		debug: true,
		transform: [babelify]
	});

	return b.bundle()
		.pipe( source( paths.bundleOutput ))
		.pipe( buffer())
		.pipe( sourcemaps.init({ loadMaps: true }))
				// Add transformation tasks to the pipeline here.
				.pipe( uglify({ mangle: true }))
				.on( 'error', gutil.log )
		.pipe( sourcemaps.write( './' ))
		.pipe( gulp.dest( paths.destClient ))
		.pipe( notify({ message: 'Browserify completed' }));
});
