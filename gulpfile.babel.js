/* eslint-disable import/no-extraneous-dependencies*/
import gulp from 'gulp';

require( 'require-dir' )( './build/tasks' );

gulp.task( 'default', ['test-runner', 'watch'], () => {
  console.log( 'Gulp task complete' );
});
