var gulp = require('gulp');

gulp.task('html', function() {

	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('default', ['html']);