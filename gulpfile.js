//https://github.com/kapke/angular2-starter/blob/master/gulpfile.js

var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean');


var src = {
        clientTs: ['./client/*.ts', './client/**/*.ts'],
        clientJs: ['./client/*.js', './client/**/*.js'],
        templates: ['./client/*.html', './client/**/*.html'],
        CSS: ['./client/*.css', './client/**/*.css']
    },
    dest = {
        dest: './build',
        js: './build/public',
        templates: './build/public',
        CSS: './build/public'
    },
    tsProject = ts.createProject('tsconfig.json');


function compileTs(src, dest) {
    var tsResult = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .on('end', function() {
            console.log('TS build finished');
        })
        .pipe(sourcemaps.write({ inculeContent: true }))
        .pipe(gulp.dest(dest));
}

function compileClientTs() {
    return compileTs(src.clientTs, dest.js);
}

function copyHtml() {
    return gulp.src(src.templates)
        .pipe(gulp.dest(dest.templates));
}

function copyClientJs() {
    return gulp.src(src.clientJs)
        .pipe(gulp.dest(dest.js));

}

function copyCSS() {
    return gulp.src(src.CSS)
        .pipe(gulp.dest(dest.CSS));
}

function startWatchers() {
    gulp.watch(src.clientTs, ['buildTs']);
    gulp.watch(src.templates, ['copyHtml']);
    gulp.watch(src.CSS, ['copyCSS']);
}

gulp.task('clean', function() {
    return gulp.src(dest.dest, { read: false })
        .pipe(clean());
});

gulp.task('copyHtml', function() {
    return copyHtml();
});

gulp.task('buildTs', function() {
    return compileClientTs();
});

gulp.task('build', ['copyHtml', 'buildTs', 'copyClientJs', 'node_modules', 'copyCSS']);

gulp.task('watch', ['build'], function() {
    startWatchers();
});


gulp.task('copyClientJs', function() {
    return copyClientJs();
});

gulp.task('copyCSS', function() {
    return copyCSS();
});



/**
 * Copy all required libraries into build directory.
 */
gulp.task('node_modules', function() {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**',
            'bootstrap/dist/css/bootstrap.min.css'
        ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});