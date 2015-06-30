/**
 *  @fileOverview Uses Gulpjs to glob javascript files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-inject
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var inject = require('gulp-inject');
var print = require('gulp-print');
var config = require('../../config');

/**
 * Gulp task to glob javascript files into an html file
 * @module javascript-globbing
 *
 * @param   config.javascriptGlobbing.src     source file with import block area(s)
 * @param   config.javascriptGlobbing.files     list of files to be imported
 * @param   config.javascriptGlobbing.config gulp-inject configuration
 * @param   config.javascriptGlobbing.dest desitation folder
 *
 */
gulp.task('javascript-globbing', function () {
  console.log('-------------------------------------------------- DEVELOPMENT: Javascript Globbing');
  var target = gulp.src(config.javascriptGlobbing.src);
  var sources = gulp.src(config.javascriptGlobbing.files, {read: false});

  return target.pipe(inject(sources,config.javascriptGlobbing.config))
  .pipe(print())
    .pipe(gulp.dest(config.javascriptGlobbing.dest));
});
