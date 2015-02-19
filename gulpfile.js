

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');


gulp.task('sass', function() {
	gulp.src('./builds/components/sass/app.scss')
		.pipe(sass())
		.pipe(gulp.dest('./builds/development/css'))
});

gulp.task('compress', function() {
	gulp.src('./builds/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./builds/development/js/app.js'))
})