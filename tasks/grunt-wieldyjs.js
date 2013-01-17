/*
 * Grunt WieldyJS
 * https://github.com/vail130/grunt-wieldyjs
 *
 * Copyright (c) 2013 Vail Gold
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  "use strict";

  grunt.registerMultiTask(
    "wieldyjs",
    "Compile WieldyMarkup templates to HTML",
    function() {
      if(this.target !== 'compile') {
        return grunt.fatal("Invalid target.");
      }
      
      var src = this.data.src;
      var dest = this.data.dest;
      var options = this.data.options || '';
      
      if(!src) {
        return grunt.fatal("Missing src property.");
      }
      if(!dest) {
        return grunt.fatal("Missing dest property.");
      }
      
      var WieldyJS = require('wieldyjs').Compiler;
      var path = require("path");
      var fs = require("fs");
      var done = this.async();
      
      grunt.file.expandFiles(src).forEach(function(filePath) {
        if(path.extname(filePath) !== '.wml') {
          return;
        }
        
        grunt.log.writeln(filePath);
        
        fs.readFile(filePath, "utf8", function(err, data) {
          if(err) {
            return grunt.log.writeln(err);
          }
          
          var output = dest + path.basename(
              filePath.substr(options.basePath.length), '.wml'
            ) + '.html';
          
          var html = new WieldyJS(data).output;
          grunt.file.write(output, html);
          grunt.log.writeln('File "' + output + '" created.');
          done();
        });
      });
    }
  );

};
