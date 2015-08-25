'use strict';

var gulp = require('gulp');
var rem2px = require('../index.js');

gulp.task('default', function() {
    gulp.src('main.css')
        .pipe(rem2px())
        .pipe(gulp.dest('build'));
});
