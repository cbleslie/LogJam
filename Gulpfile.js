var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
//calling this seperately, 'cause .create.
var browserSync = require('browser-sync').create();

var paths = {
  dist: 'dist/',
  src: 'src/',
};


gulp.task('styles', function () {
  gulp.src(paths.src + '**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['IE 10','last 4 versions'],
      cascade: true
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  gulp.src(paths.src + 'layout-examples/index.html')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['html','styles'], function() {
  browserSync.init({
      server: paths.dist
  });

  gulp.watch(paths.src + "*.scss", ['styles']);
  gulp.watch(paths.src + "*.html", ['html']).on('change', browserSync.reload);
});
