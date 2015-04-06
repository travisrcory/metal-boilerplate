var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var options = require('metaljs/tasks/lib/options')();

gulp.task('build:min', function() {
  return gulp.src(path.join(options.buildDest, 'boilerplate.js'))
      .pipe(uglify())
      .pipe(rename(function (path) {
        path.basename += '-min';
      }))
      .pipe(gulp.dest(options.buildDest));
});

gulp.task('build', function(cb) {
  runSequence('build:globals', 'build:min', cb);
});
