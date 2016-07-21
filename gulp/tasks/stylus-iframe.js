'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,paths   = require('../paths')
    ,stylus  = require('gulp-stylus');

// Call Stylus
module.exports = gulp.task('stylus-iframe', function () {
  return gulp.src(paths.source.styliframe)
    .pipe(plumber())
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.build.cssiframe))
});
