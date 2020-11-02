var gulp = require('gulp')
var sass = require('gulp-sass')
var cssmin = require('gulp-cssmin')
sass.compiler = require('node-sass')

gulp.task('sass', function () {
  return gulp
    .src('./src/**/*.scss')
    .pipe(cssmin())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('lib'))
})

gulp.task('copy-sass', function () {
  return gulp.src('./src/**/*.scss').pipe(gulp.dest('lib'))
})
