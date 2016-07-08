var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('src')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

// Default is alias for webserver
gulp.task('default', ['webserver']);