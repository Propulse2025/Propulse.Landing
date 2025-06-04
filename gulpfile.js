const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

// Compile Sass
function style() {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// Concat scripts
function scripts() {
  return gulp
    .src("src/scripts/**/*.js")
    .pipe(concat("propulse.js"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// Copy HTML
function copyHtml() {
  return gulp
    .src("src/index.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// Watch files
function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch("src/styles/**/*.scss", style);
  gulp.watch("src/scripts/**/*.js", scripts);
  gulp.watch("src/index.html", copyHtml).on("change", browserSync.reload);
}

// Default task
exports.default = gulp.series(style, scripts, copyHtml, watch);
