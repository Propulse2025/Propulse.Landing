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
    .pipe(gulp.dest("dist/styles"))
    .pipe(browserSync.stream());
}

// Watch files
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("src/styles/**/*.scss", style);
  gulp.watch("src/scripts/**/*.js").on("change", browserSync.reload);
  gulp.watch("src/index.html").on("change", browserSync.reload);
}

// Default task
exports.default = gulp.series(style, watch);
