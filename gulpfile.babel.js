/* eslint-disable import/no-extraneous-dependencies*/
import gulp from 'gulp';
import mocha from 'gulp-mocha';

const mochaOpts = {
  ui: 'tdd',
  require: ['./server/db'],
  compilers: 'js:babel-core/register'
};

gulp.task( 'exec', () => {
  process.env.NODE_ENV = 'test';
});

gulp.task( 'test-runner', ['exec'], () => {
  gulp.src( './test/*Spec.js' )
  .pipe( mocha( mochaOpts ));
});

gulp.task( 'tdd', () => {
  gulp.watch(['server/**/*.js', 'test/*.js'], ['test-runner']);
});

gulp.task( 'default', ['test-runner', 'tdd'], () => {
  console.log( 'Gulp task complete' );
});
