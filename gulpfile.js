var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var ngAnnotate = require('gulp-ng-annotate');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');


gulp.task('clean', function () {
  return gulp.src('build/')
    .pipe(clean());
});

gulp.task('usemin', function () {
  return gulp.src('./public/index.html')
    .pipe(usemin({
      css: [rev()],
      js: [ngAnnotate(), uglify(), rev()],
      depJs: [rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('copy', function () {
  return gulp.src(['./public/**/*.html', '!./public/vendor/**', '!./public/index.html'])
    .pipe(gulp.dest('build/'));
});

gulp.task('bower', function () {
  return gulp.src('./public/index.html')
    .pipe(inject(gulp.src(bowerFiles()), { name: 'bower', relative: true }))
    .pipe(inject(gulp.src(['./public/js/**/*.js', './public/css/**/*.css'], { read: false }), { relative: true }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', function (cb) {
  return runSequence('clean', 'usemin', 'copy', cb)
});
