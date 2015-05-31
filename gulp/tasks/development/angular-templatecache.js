/**
 *  @fileOverview Uses Gulpjs to create javascript templates from AngularJS-based html templates
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-angular-templatecache
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var angularTemplatecache = require('gulp-angular-templatecache');
var config = require('../../config');

/**
 * Gulp task that uses gulp-angular-templatecache to create $templateCache.put javascript templates from app html files
 * @module angularTemplatecache
 *
 * @param   config.angularTemplatecache.src     html file with import blocks
 * @param   config.angularTemplatecache.config gulp-angular-templatecache configuration
 * @param   config.angularTemplatecache.dest destination folder
 *
 */
gulp.task('angularTemplatecache', function(){
  console.log('-------------------------------------------------- DEVELOPMENT: HTML->AngularJS templatescache');

  return gulp.src(config.angularTemplatecache.src)
    .pipe(angularTemplatecache(config.angularTemplatecache.config))
    .pipe(gulp.dest(config.angularTemplatecache.dest));
});
