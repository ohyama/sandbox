var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('html', function() {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('img', function() {
	return gulp.src('./src/img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('./dest/img'));
});

gulp.task('default', ['html', 'img']);
