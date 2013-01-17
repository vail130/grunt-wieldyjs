/*
 * Grunt WieldyJS
 * https://github.com/vail130/grunt-wieldymark
 *
 * Copyright (c) 2013 Vail Gold
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  "use strict";

  grunt.registerMultiTask("wieldyjs", "Compile WieldyMarkup templates to HTML", function() {
    var src = this.file.src;
    var dest = this.file.dest;

    if(!src) {
      grunt.fatal("Missing src property.");
      return;
    }

    if(!dest) {
      grunt.fatal("Missing dest property");
      return;
    }

    var WieldyJS = require('wieldyjs');
    var path = require("path");
    var fs = require("fs");
    var opts = this.data.options;
    var done = this.async();
    
    grunt.file.expandFiles(src).forEach(function(filePath) {
      if(path.extname(filePath).length === 0) {
        filePath += ".wml";
      }

      if(filePath.charAt(0) !== "/") {
        filePath = (opts.basePath || ".") + "/" + filePath;
      }
      
      var data = fs.readFileSync(filePath, "utf8");
      var html = new WieldyJS(data).output;
      grunt.file.write(dest, html);
      grunt.log.writeln('File "' + dest + '" created.');
      done();
    });
  });

};
