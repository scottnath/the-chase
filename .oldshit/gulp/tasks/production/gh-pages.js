/**
 *  @fileOverview Uses Gulpjs to publish code to gh-pages
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-gh-pages
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp        = require('gulp');
var ghPages = require('gulp-gh-pages');
var config      = require('../../config');

/**
 * Gulp task that sends code to a gh-pages branch on github.com
 * @function ghPages
 *
 * @param {string/array}  config.ghPages.src app to be sent to gh-pages branch
 *
 */


gulp.task('ghPages', function () {
  console.log('-------------------------------------------------- BUILD: Deploy to GitHub Pages ');
    return gulp.src(config.ghPages.src)
      .pipe(ghPages());
});
