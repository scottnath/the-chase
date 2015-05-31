/**
 *  @fileOverview Uses Gulpjs to trigger browser-sync on the produciton environment
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
 * Gulp task that triggers browser-sync for the production environment
 * @function browsersync
 *
 * @param {object}  config.browsersync.production browsersync production configuration
 *
 */
gulp.task('browsersync-production', function() {
  browsersync.init(null, config.browsersync.production, function (err, bs) {
    console.log('Started connect web server on ' + config.browsersync.production.host + ':' + config.browsersync.production.port);
  });;
});

