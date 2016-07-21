'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'notes', 'stylus', 'stylus-iframe', 'imagemin', 'watch', 'browser-sync', 'js']);
