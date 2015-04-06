var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', ['build:globals'], function() {
  return gulp.src(['build/boilerplate.js'])
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
