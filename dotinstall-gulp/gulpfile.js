var gulp = require('gulp');

gulp.task('html', function() {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('msg', ['html'], function() {
	console.log('hello');
});

gulp.task('default', ['msg']);
