/**
 *  @fileOverview Uses Gulpjs to lint SASS files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-cached
 *  @requires     NPM:gulp-scss-lint
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var cached = require('gulp-cached');
var scsslint = require('gulp-scss-lint');
var config = require('../../config');

/**
 * Gulp task to lint scss/sass files
 * @module scsslint
 *
 * @param   config.scss.src     source .sass/.scss files
 * @param   config.scss.config gulp-scss-lint configuration
 *
 */
gulp.task('scsslint', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: SCSSLint SCSS Linting');
  return gulp.src(config.scss.src)
    .pipe(cached('dev-scsslint'))
    .pipe(scsslint(config.scss.config));
});
