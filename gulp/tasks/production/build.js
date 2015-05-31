/**
 *  @fileOverview Uses Gulpjs to trigger a production build
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-filter
 *  @requires     NPM:gulp-useref
 *  @requires     NPM:gulp-rev
 *  @requires     NPM:gulp-ng-annotate
 *  @requires     NPM:gulp-uglify
 *  @requires     NPM:gulp-minify-css
 *  @requires     NPM:gulp-rev-replace
 *  @requires     NPM:del
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var rev = require('gulp-rev');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var revReplace = require('gulp-rev-replace');
var del = require('del');
var config = require('../../config');

/**
 * Gulp task that triggers the build process
 * @module build
 *
 * @param   config.build.src     main application html file
 * @param   config.build.config build task configuration
 * @param   config.build.dest build folder
 *
 */
gulp.task('build', ['build:clean'], function(){

  var jsFilter = filter(config.build.config.jsFilter); // our scripts
  var bowerJsFilter = filter(config.build.config.bowerJsFilter); // bower scripts
  var cssFilter = filter(config.build.config.cssFilter); // our css and bower css

  console.log('-------------------------------------------------- BUILD: Assets Conversion ');
  var assets = useref.assets();

  return gulp.src(config.build.src)
    .pipe(assets) // useref is looking for all the assets in our build blocks in app/ main html file
    .pipe(rev()) // creates out file revision names of those assets

    // START: Process User-Created (non-bower) javascript files
    .pipe(jsFilter)
    .pipe(ngAnnotate()) // required to stop minfication from breaking scripts
    .pipe(uglify()) // Uglify, our minification choice for javascripts
    .pipe(jsFilter.restore())
    // END: Process User-Created (non-bower) javascript files

    // START: Process Bower javascript files
    .pipe(bowerJsFilter)
    .pipe(ngAnnotate()) // required to stop minfication from breaking scripts
    .pipe(uglify()) // Uglify, our minification choice for javascripts
    .pipe(bowerJsFilter.restore())
    // END: Process Bower javascript files

    // START: Process css files
    .pipe(cssFilter)
    .pipe(minifyCss({keepSpecialComments: '*'}))
    .pipe(cssFilter.restore())
    // END: Process css files

    .pipe(assets.restore())
    .pipe(useref()) // looks for build blocks
    .pipe(revReplace()) // replaces pointers to our new, revision-named assets
    .pipe(gulp.dest(config.build.dest)); // uses our new html file to build the /build main html file

});

/**
 * Gulp task that deletes the build folder completely
 * @module build:clean
 *
 * @param   config.build.dest build folder
 *
 */
gulp.task('build:clean', function () {
  console.log('-------------------------------------------------- Cleaning out build folder');
  return del([config.build.dest]);
});
