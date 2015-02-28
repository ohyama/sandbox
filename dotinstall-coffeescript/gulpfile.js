var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('html', function() {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('js', function() {
	gulp.src('./src/coffee/*.coffee')
		.pipe(plumber())
		.pipe(coffee())
		.pipe(gulp.dest('./dest/scripts'));
});

gulp.task('watch', function() {
	gulp.watch('./src/coffee/*.coffee', ['js'])
	gulp.watch('./src/*.html', ['html'])
});

gulp.task('webserver', function() {
	gulp.src('./dest')
		.pipe(webserver({
			host: 'localhost',
			livereload: true,
		}))
});

gulp.task('default', ['html', 'js', 'watch', 'webserver']);
