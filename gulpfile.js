

var gulp = require('gulp'),
	// uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	livereload = require('gulp-connect'),
	minifyHTML = require('gulp-minify-html');


gulp.task('sass', function() {
	gulp.src('./builds/components/sass/app.scss')
		.pipe(sass())
		.pipe(gulp.dest('./builds/development/css/'))
		.pipe(livereload.reload())
});

gulp.task('js', function() {
	gulp.src('./builds/development/js/**/*.js')
		.pipe(concat('app.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./builds/development/js/'))
		.pipe(livereload.reload())
});

gulp.task('connect', function() {
	livereload.server({
		root: './builds/development/',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('./builds/development/index.html')
		.pipe(gulp.dest('./builds/development/'))
		.pipe(livereload.reload())
})



gulp.task('watch', function() {
	gulp.watch('./builds/development/js/**/*.js', ['js']);
	gulp.watch('./builds/components/sass/**/*.scss', ['sass']);
	gulp.watch('./builds/development/index.html', ['html']);
});

gulp.task('default', ['html','sass', 'js', 'connect', 'watch']);