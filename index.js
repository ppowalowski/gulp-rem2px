'use strict';

/**
 * Requires
 */
var util = require('gulp-util');
var PluginError = util.PluginError;
var through = require('through2');
var rework = require('rework');
var rem2px = require('rework-rem2px');

/**
 * PLUGIN_NAME
 * @type {String}
 */
var PLUGIN_NAME = 'gulp-px2rem';

/**
 * Gulp rem 2 px
 * @param  {Number} size
 * @return {Object}
 */
function gulpRem2Px(size) {
	if (typeof size == 'undefined') {
		var size = 16
	}
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }

        try {
            file.contents = new Buffer(rework(file.contents.toString()).use(rem2px(size)).toString());
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err));
        }

        this.push(file);
        cb();
    });
}

module.exports = gulpRem2Px;
