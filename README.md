[![npm version][npm-image]][npm-url]

This is a Gulp plugin for [rework-rem2px](https://github.com/nfroidure/rework-rem2px).

## Installation

Run `npm install gulp-rem2px`

## Usage

```js
var rem2px = require('gulp-rem2px');

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(rem2px(16))
        .pipe(gulp.dest('css'));
});
```

## Options

Pass in the base size as Number

```js
var rem2px = require('gulp-rem2px');

var baseSize = 22;


gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(rem2px(baseSize))
        .pipe(gulp.dest('css'));
});
```

This plugin is basically a clone of the inverse counterpart which is gulp-px2rem:
[gulp-px2rem](https://github.com/ggkovacs/gulp-px2rem)
by [Gergely Kovács](https://github.com/ggkovacs)

# License
MIT © 2015 Patrik Powalowski (patrik@powalowski.de)

[npm-image]: https://badge.fury.io/js/gulp-rem2px.svg
[npm-url]: https://www.npmjs.com/package/gulp-rem2px
