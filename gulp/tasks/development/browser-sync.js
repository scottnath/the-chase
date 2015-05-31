/**
 *  @fileOverview Uses Gulpjs to trigger browser-sync
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:browser-sync
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config');

/**
 * Gulp task that triggers browser-sync
 * @function browsersync
 *
 * @param   config.browsersync.development development configuration
 *
 */
gulp.task('browsersync', function() {
  browsersync.init(null, config.browsersync.development, function (err, bs) {
    console.log('Started connect web server on ' + config.browsersync.development.host + ':' + config.browsersync.development.port);
  });;
});

/**
 * Gulp task that triggers a browser-sync reload
 * @function browsersync-reload
 *
 */
gulp.task('browsersync-reload', function(){
  browsersync.reload();
});
