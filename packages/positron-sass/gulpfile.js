const gulp = require("gulp");
const sass = require("gulp-sass");
const argv = require("yargs").argv;

gulp.task("sass-test", function() {
    return gulp.src(argv.src ? argv.src.split(",") : "./src/lib/**/*.spec.scss")
        .pipe(sass().on("error", sass.logError));
});

gulp.task("sass-test:watch", function() {
    gulp.watch("./src/**/*.scss", ["sass-test"]);
});
