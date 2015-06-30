/**
 *  @fileOverview Uses Gulpjs to glob scss files into @import lines
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-css-globbing
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var cssGlobbing = require('gulp-css-globbing');
var config = require('../../config');

/**
 * Gulp task to glob .scss/.sass files and write @import statements for them
 * @module css-globbing
 *
 * @param   config.cssGlobbing.src     source file with import block area
 * @param   config.cssGlobbing.config gulp-css-globbing configuration
 * @param   config.cssGlobbing.dest desitation folder
 *
 */
gulp.task('css-globbing', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: SCSS Globbing');

  return gulp.src(config.cssGlobbing.src)
    .pipe(cssGlobbing(config.cssGlobbing.config))
    .pipe(gulp.dest(config.cssGlobbing.dest));
});
