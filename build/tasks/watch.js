/* eslint-disable import/no-extraneous-dependencies*/
import gulp from 'gulp';

const paths = require( '../paths' );

gulp.task( 'watch', () => {
	gulp.watch( paths.watchTest, ['test-runner']);
});
