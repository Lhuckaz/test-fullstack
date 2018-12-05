const gulp = require('gulp');

const concat = require("gulp-concat");

const csso = require("gulp-csso");

const minify = require('gulp-minify');

gulp.task('minify-js', function() {
	gulp.src('../app/*.js')
	.pipe(concat('user.js'))
	.pipe(minify())
	.pipe(gulp.dest('../app/'));
});

gulp.task('minify-css', function () {
	return gulp.src('../css/app.css')
	.pipe(csso())
	.pipe(gulp.dest('../css/'));
});

gulp.task('default', [ 'minify-js', 'minify-css' ]);