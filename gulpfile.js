var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task('clean', require('del').bind(null, ['./css']));

gulp.task('sass', ['clean'], function () {
  gulp.src('./sass/**/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch',  ['sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch'], function() {
});