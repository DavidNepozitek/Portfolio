var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync").create();


var plumberOpts = {
    errorHandler: function(error) {
        console.log(error.toString());
        this.emit('end');
    }
};



gulp.task("styles_main", function() {

    return gulp.src("css/main.less")
        .pipe(plumber(plumberOpts))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("css"));

});


gulp.task("scripts_main", function() {

    return gulp.src("js/main.js")
        .pipe(plumber(plumberOpts))
        .pipe(uglify())
        .pipe(rename("scripts.min.js"))
        .pipe(gulp.dest("js"));

});

gulp.task("scripts_vendor", function() {

    return gulp.src([
        "js/vendor/TweenLite.min.js",
        "js/vendor/TimelineLite.min.js",
        "js/vendor/jquery.gsap.min.js",
        "js/vendor/CSSPlugin.min.js",
        "js/vendor/EasePack.min.js",
        "js/vendor/ScrollMagic.min.js",
        "js/vendor/animation.gsap.min.js"
    ])
        .pipe(concat("vendor.min.js"))
        .pipe(plumber(plumberOpts))
        .pipe(uglify())
        .pipe(gulp.dest("js"));

});

gulp.task("browser-sync", function () {
    browserSync.init({
        proxy: "localhost"
    });
});


gulp.task("watch", ["styles_main", "scripts_main", "scripts_vendor","browser-sync"], function() {

    gulp.watch("js/*.js", ["scripts_main"]);

    gulp.watch("js/vendor/*.js", ["scripts_vendor"]);

    gulp.watch(["css/*.less", "css/*.css"], ["styles_main"]);

    gulp.watch(["css/styles.min.css", "js/scripts.min.js", "*.php"]).on("change", browserSync.reload);

});
