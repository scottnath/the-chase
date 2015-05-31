/**
 *  @fileOverview Uses Gulpjs to lint javascript files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-cached
 *  @requires     NPM:gulp-eslint
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var cached = require('gulp-cached');
var eslint = require('gulp-eslint');
var config = require('../../config');

/**
 * Gulp task to lint javascript files using eslint
 * @module eslint
 *
 * @param   config.eslint.src     list of files to be linted
 * @param   config.eslint.config gulp-eslint configuration
 *
 */

/*********************************************
ESLint Javascript Linting
*/
gulp.task('eslint', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: ESLint Javascript Linting');
  return gulp.src(config.eslint.src)
    .pipe(cached('dev-eslint'))
    .pipe(eslint(config.eslint.config))
    .pipe(eslint.format());
});
