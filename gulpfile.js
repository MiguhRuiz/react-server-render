var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var streamify = require('gulp-streamify')

gulp.task('build', function() {
    browserify({
        entries: './src/client/index.jsx',
        extensions: ['jsx'],
        debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', function () {
  gulp.watch('./src/components/**/*.jsx', ['build'])
})

gulp.task('default', ['build', 'watch'])
