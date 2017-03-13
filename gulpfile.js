var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gutil = require('gulp-util');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
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
    del([path.join(__dirname, 'dist')]).then(function() {
        cb();
    });
});

gulp.task('watch', function() {
    gulp.watch(['./src/cv.js', './src/**/*.js', './src/**/*.scss'], ['webpack'])
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
gulp.task('build', ['webpack', 'watch'], function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'build'], function() {
    browserSyncInit('./dist');
});
