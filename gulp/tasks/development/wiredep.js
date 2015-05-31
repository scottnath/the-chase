/**
 *  @fileOverview Uses Gulpjs glob bower-based files
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:wiredep
 *  @requires     NPM:gulp-plumber
 *  @requires     /gulp/config.js
 */
'use strict';
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var plumber = require('gulp-plumber');
var config = require('../../config');

/**
 * Gulp task that uses Wiredep to glob bower js and css files
 * @module wiredep
 *
 * @param   config.wiredep.src     html file with import blocks
 * @param   config.wiredep.config wiredep configuration
 * @param   config.wiredep.dest destination folder
 *
 */
gulp.task('wiredep', function() {
  console.log('-------------------------------------------------- DEVELOPMENT: wiredep gathering bower components');

  return gulp.src(config.wiredep.src)
    .pipe(plumber())
    .pipe(wiredep(config.wiredep.config))
    .pipe(gulp.dest(config.wiredep.dest));

});


/** TODO: add karma file when unit-testing is added

  gulp.src('karma.conf.js') // TODO: need to SETTINGS this so that it can point to /app
    .pipe(wiredep({
        devDependencies: false,
        ignorePath:  /\.\.\//,
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        },
        cwd: SETTINGS.src.app
      }))
    .pipe(gulp.dest('./'));
*/
