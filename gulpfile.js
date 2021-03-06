var path = require('path');
var gulp = require('gulp');

var bowerDir  = path.join(__dirname, 'bower_components');
var jsDir     = path.join(__dirname, 'assets/js/vendor');
var cssDir    = path.join(__dirname, 'assets/css/vendor');

gulp.task('js', function() {
  var targets = [
    path.join(bowerDir, 'jquery/dist/jquery.js'),
    path.join(bowerDir, 'bootstrap/dist/js/bootstrap.js')
  ];

  return gulp.src(targets).pipe(gulp.dest(jsDir));
});

gulp.task('css', function() {
  var targets = [
    path.join(bowerDir, 'bootstrap/dist/css/bootstrap.css')
  ];

  return gulp.src(targets).pipe(gulp.dest(cssDir));
});

gulp.task('build', ['js', 'css']);
