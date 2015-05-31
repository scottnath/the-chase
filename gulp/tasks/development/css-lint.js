/**
 *  @fileOverview Uses Gulpjs to lint .css files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-csslint
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var csslint = require('gulp-csslint');
var config = require('../../config');

/**
 * Gulp task that uses gulp-csslint to lint
 * @module csslint
 *
 * @param   config.csslint.src     source css files to be linted
 * @param   config.csslint.config configuration for csslint
 *
 */
gulp.task('csslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: CSSLint CSS Linting');
  return gulp.src(config.csslint.src)
    .pipe(csslint(config.csslint.config))
    .pipe(csslint.reporter());
});
