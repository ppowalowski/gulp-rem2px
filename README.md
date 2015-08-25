
Version: **0.0.2**

This is a Gulp plugin for [rework-rem2px](https://github.com/nfroidure/rework-rem2px).

## Installation

Run `npm install gulp-rem2px`

## Usage

```js
var px2rem = require('gulp-px2rem');

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(rem2px(16))
        .pipe(gulp.dest('css'));
});
```

## Options

Pass in the base size as Number

```js
var px2rem = require('gulp-px2rem');

var baseSize = 22;


gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(px2rem(baseSize))
        .pipe(gulp.dest('css'));
});
```

This plugin is basically a clone of the inverse counterpart which is gulp-px2rem:
[gulp-px2rem](https://github.com/ggkovacs/gulp-px2rem)
by [Gergely Kovács][https://github.com/ggkovacs]

# License
MIT © 2015 Patrik Powalowski (patrik@powalowski.de)
