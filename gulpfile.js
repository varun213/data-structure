const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('gulp_nodemon', function(done) {
  nodemon({
    script: 'index.js', // this is where my express server is
    ext: 'js html css', // nodemon watches *.js, *.html and *.css files
    env: {'NODE_ENV': 'development'},
  });
  done();
});

gulp.task('sync', function(done) {
  browserSync.init({
    port: 3002, // this can be any port, it will show our app
    proxy: 'http://localhost:3001/', // this is the port where express server works
    ui: {port: 3003}, // UI, can be any port
    reloadDelay: 1000, // Important, otherwise syncing will not work
  });
  gulp.watch(['./**/*.js', './**/*.html', './**/*.css'])
      .on('change', browserSync.reload);
  done();
});

gulp.task('default', gulp.series('gulp_nodemon', 'sync'));
