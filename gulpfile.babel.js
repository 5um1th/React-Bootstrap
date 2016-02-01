import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, { reload } from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import htmlReplace from 'gulp-html-replace';
import runSequence from 'run-sequence';

const paths = {
  bundle: 'app.js',
  srcJsx: 'src/Index.js',
  srcCss: 'src/styles/main.scss',
  srcScss: 'src/**/*.scss',
  srcImg: 'src/images/**',
  srcLint: ['src/**/*.js', 'test/**/*.js'],
  dist: 'dist',
  distCss: 'dist/styles',
  distJs: 'dist/js',
  distDeploy: './dist/**/*'
};

const customOpts = {
  entries: [paths.srcJsx],
  debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);

gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', () => {
  let bundler = watchify(browserify(opts));

  function rebundle() {
    return bundler.bundle()
      .on('error', notify.onError())
      .pipe(source(paths.bundle))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  browserify(paths.srcJsx, {debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJs));
});

gulp.task('styles', () => {
  gulp.src(paths.srcCss)
  .pipe(sass())
  .pipe(gulp.dest(paths.distCss))
  .pipe(reload({stream: true}));
});

gulp.task('htmlReplace', () => {
  gulp.src('index.html')
  .pipe(htmlReplace({css: 'styles/main.css', js: 'js/app.js'}))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('lint', () => {
  gulp.src(paths.srcLint)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watchTask', () => {
  gulp.watch(paths.srcScss, ['styles']);
  gulp.watch(paths.srcJsx, ['lint']);
});

gulp.task('watch', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'lint'], cb);
});

gulp.task('build', cb => {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'styles', 'htmlReplace'], cb);
});
