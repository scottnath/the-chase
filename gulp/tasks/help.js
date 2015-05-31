/**
 *  @fileOverview Uses Gulpjs trigger Compass
 *
 *  @author       Scott Nath
 *
 *  @requires     NPM:gulp
 *  @requires     NPM:gulp-task-listing
 */
'use strict';
var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

/**
 * Gulp task that lists all available Gulp tasks
 * @module help
 *
 * the `.withFilters(/:/)` function tells gulp-task-listing that only tasks with a colon are subtasks
 */
gulp.task('help', taskListing.withFilters(/:/));
