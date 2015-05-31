/**
 *  @fileOverview Uses Gulpjs to watch files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     /gulp/tasks/development/browser-sync.js
 *  @requires     /gulp/tasks/development/scss-lint.js
 *  @requires     /gulp/tasks/development/css-globbing.js
 *  @requires     /gulp/tasks/development/compass.js
 *  @requires     /gulp/tasks/development/wiredep.js
 *  @requires     /gulp/tasks/development/
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config');

/**
 * Gulp task that watches files and triggers other tasks
 * @module watch
 *
 * @param   config.scss.src     finds all .scss source files
 * @param   config.wiredep.bowerjson     application bower.json file
 * @param   config.eslint.src   all relevant application .js files
 * @param   config.development.appHtml   application main html file
 *
 */
gulp.task('watch', ['browsersync'], function() {

  /**
  * Gulp Watch tracking .scss/.sass files for changes, then lints and globs them, then triggers compass
  * @module watch-scss
  */
  gulp.watch(config.scss.src, ['scsslint','css-globbing','compass']);

  /**
  * Gulp Watch tracking .js files for changes, then lints the changed files
  * @module watch-eslint
  */
  gulp.watch(config.eslint.src, ['eslint']);

  /**
  * Gulp Watch tracking the app's bower.json file, triggers wiredep on changes
  * @module watch-bower.json
  */
  gulp.watch(config.wiredep.bowerjson, ['wiredep']);


  /**
  * Gulp Watch tracking the app's main index file, triggers browser-reload. Covers browsersync-reload for other main-html-changing tasks like javascript-globbing, wiredep
  * @module watch-main-html
  */
  gulp.watch(config.development.appHtml, ['browsersync-reload']);

});
