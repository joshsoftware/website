'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const dist = 'dist';
const src = 'src';
const tmp = '.tmp';
const vendor = 'node_modules';

// Clean output directory
gulp.task('clean', cb => {
  return del([
    `${tmp}`,
    `${dist}`,
    `!${dist}/.git`
  ], {dot: true, force: true});
});

// Copy dist
gulp.task('copy', () => {
  return gulp.src([
    `${tmp}/**/*`,
    `${src}/*`
  ], {dot: true})
  .pipe(gulp.dest(`${dist}`))
  .pipe($.size({title: '[copy]'}));
});

gulp.task('default', ['clean'], cb => {
  return runSequence(
    'lint',
    ['templates', 'styles', 'vendors', 'scripts'],
    ['fonts', 'images', 'minifyCss'],
    'copy',
    cb
  );
});

gulp.task('fonts', () => {
  return gulp.src([
    `${src}/fonts/**/*.{eot,svg,ttf,woff,woff2}`
  ])
  .pipe(gulp.dest(`${dist}/fonts`))
  .pipe($.size({title: '[fonts]'}));
});

// Optimize images
gulp.task('images', () => {
  return gulp.src(`${src}/images/**/*`)
  .pipe($.cache($.imagemin({
    progressive: true,
    interlaced: true
  })))
  .pipe(gulp.dest(`${tmp}/images`))
  .pipe($.size({title: '[images]', showFiles: true}))
});

// Lint JavaScript
gulp.task('lint', () => {
  return gulp.src([
    `${src}/scripts/**/*.js`
  ])
  .pipe($.babel())
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.if(!browserSync.active, $.eslint.failOnError()))
  .pipe($.size({title: '[lint]'}));
});

gulp.task('minifyCss', () => {
  return gulp.src([
    `${tmp}/styles/main.css`,
    `${tmp}/styles/animate.css`
  ])
  .pipe($.rename(function (path) {
    path.basename += ".min";
    path.extname = ".css"
  }))
  .pipe($.cssnano())
  .pipe(gulp.dest(`${tmp}/styles`))
  .pipe($.size({title: '[minifyCss]'}))
});

gulp.task('scripts', () => {
  let scripts = [
    `${src}/scripts/main.js`,
    `${src}/scripts/*/**/*.js`
  ];

  return gulp.src(scripts)
  .pipe($.newer(`${tmp}/scripts`))
  .pipe($.babel())
  .pipe($.concat('scripts.js'))
  .pipe(gulp.dest(`${tmp}/scripts`))
  .pipe($.rename(function (path) {
    path.basename += ".min";
    path.extname = ".js"
  }))
  .pipe($.uglify({preserveComments: 'some'}))
  .pipe(gulp.dest(`${tmp}/scripts`))
  .pipe($.size({title: '[scripts]'}));
});

gulp.task('serve', ['templates', 'styles', 'vendors', 'scripts'], () => {

  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: [tmp, src]
    }
  });

  gulp.watch(`${src}/views/**/*.jade`, ['templates']);
  gulp.watch(`${src}/styles/**/*.{scss,sass}`, ['styles']);
  gulp.watch(`${src}/scripts/**/*.js`, ['lint', 'scripts', reload]);
  gulp.watch(`${tmp}/*.html`, reload);
  gulp.watch(`${src}/images/**/*`, reload);

});

gulp.task('serve:dist', ['default'], () => {
  browserSync({
    notify: false,
    port: 3001,
    server: {
      baseDir: [dist]
    }
  });
});

gulp.task('styles', () => {
  return gulp.src([
    `${src}/styles/main.{scss,sass}`,
    `${vendor}/animate.css/animate.css`,
  ])
  .pipe($.newer(`${tmp}/styles`))
  .pipe($.sourcemaps.init())
  .pipe($.cssGlobbing({
    extensions: ['.scss', '.sass']
  }))
  .pipe($.plumber())
  .pipe($.sass.sync({
    outputStyle: 'expanded',
    precision: 10,
    includePaths: ['.']
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({browsers: ['last 1 version']}))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(`${tmp}/styles`))
  .pipe($.size({title: '[styles]'}))
  .pipe(reload({stream: true}));
});

gulp.task('templates', () => {
  return gulp.src(`${src}/views/*.jade`)
  .pipe($.newer(`${tmp}/*.html`))
  .pipe($.sourcemaps.init())
  .pipe($.jade({
    pretty: true
  }))
  .pipe($.plumber())
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest(`${tmp}`))
  .pipe($.size({title: '[templates]'}));
});

gulp.task('vendors', () => {
  return gulp.src([
    `${vendor}/jquery/dist/jquery.js`,
    `${vendor}/pooper.js/dist/popper.js`,
    `${vendor}/bootstrap/dist/js/bootstrap.js`,
    `${vendor}/swiper/dist/js/swiper.jquery.js`,
    `${vendor}/skrollr/dist/skrollr.min.js`,
  ])
  .pipe($.newer(`${tmp}/scripts`))
  .pipe($.sourcemaps.init())
  .pipe($.sourcemaps.write())
  .pipe($.concat('vendors.min.js'))
  .pipe($.uglify({preserveComments: 'some'}))
  .pipe(gulp.dest(`${tmp}/scripts`))
  .pipe($.size({title: '[vendors]'}));
});
