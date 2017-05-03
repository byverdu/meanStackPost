/* eslint-disable import/no-extraneous-dependencies*/
import gulp from 'gulp';
import mocha from 'gulp-mocha';

const paths = require( '../paths' );

const mochaOpts = {
  ui: 'tdd',
  require: ['./server/db'],
  compilers: 'js:babel-core/register'
};

gulp.task( 'exec', () => {
  process.env.NODE_ENV = 'test';
});

gulp.task( 'test-runner', ['exec'], () => {
  gulp.src( paths.srcTest )
    .pipe( mocha( mochaOpts ));
});
