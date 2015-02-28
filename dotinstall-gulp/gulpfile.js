var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('img', function() {
	return gulp.src('./src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('./dest/img'));
});

gulp.task('js', function() {
	return gulp.src('./src/coffee/*.coffee')
		.pipe(coffee())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dest/js'));
});


gulp.task('default', ['html', 'img', 'js']);
