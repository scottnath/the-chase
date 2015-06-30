/**
 *  @fileOverview Uses Gulpjs trigger Compass
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-compass
 *  @requires     NPM:gulp-plumber
 *  @requires     NPM:browser-sync
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var config = require('../../config');

/**
 * Gulp task that triggers Compass
 * @module compass
 *
 * @param   config.compass.src     source .sass/.scss file with imports
 * @param   config.compass.config gulp-compass configuration
 * @param   config.compass.dest destination folder
 *
 */
gulp.task('compass', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: Compass .scss conversion');

  return gulp.src(config.compass.src)
    .pipe(plumber())
    .pipe(compass(config.compass.config))
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest(config.compass.dest))
    .pipe(reload({stream:true}));
});
