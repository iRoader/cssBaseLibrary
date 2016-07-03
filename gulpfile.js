var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('layoutSass', function(){
	gulp.src('app/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/dist/css'));
})

gulp.task('layoutWatch', function(){
	gulp.watch('app/**/*.scss', ['layoutSass']);
})

gulp.task('default', ['layoutWatch'])