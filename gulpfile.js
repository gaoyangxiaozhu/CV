var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var gutil = require('gulp-util');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var imagemin = require('gulp-imagemin');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');
var path = require('path');

function browserSyncInit (baseDir) {
    //起动browserSync
    browserSync.init({
        server: {
            baseDir: baseDir
        }
    });
};
gulp.task('clean', function(cb) {
    del([path.join(__dirname, 'dist')], cb)
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js', './src/**/*.scss'], ['webpack'])
});
gulp.task('webpack', function(cb) {
  var webpackConfig = require('./webpack.config.js')
  var myConfig = Object.create(webpackConfig)
  webpack(myConfig, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err)
      gutil.log("[webpack]", stats.toString({
          colors: true
      }))
      if(browserSync.active) {
          browserSync.reload()
      }
      cb()
  })
});

gulp.task('image', function () {
  gulp.src('./my.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'));
});

gulp.task('json', function(cb){
    return gulp.src(['./cv.json'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['webpack', 'image', 'json', 'watch'], function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build'], function() {
    browserSyncInit('./dist');
});
