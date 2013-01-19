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
      
      var src = this.data.src
        , dest = this.data.dest
        , options = this.data.options || ''
        ;
      
      if(!src) {
        return grunt.fatal("Missing src property.");
      }
      if(!dest) {
        return grunt.fatal("Missing dest property.");
      }
      
      var WieldyJS = require('wieldyjs').Compiler
        , done = this.async()
        ;
      
      grunt.file.expandFiles(src).forEach(function(filePath) {
        var data = grunt.helper('validateAndReadFile', filePath)
          , outputFilePath = grunt.helper(
              'getOutputFileFromInputFile', filePath, dest, options.basePath
            )
          , html = new WieldyJS(data).output
          ;
        
        grunt.file.write(outputFilePath, html);
        done();
      });
    }
  );
  
  grunt.registerHelper('validateAndReadFile', function(filePath) {
    if (!filePath || filePath + '' === '') {
      return {
        status: 'failure',
        result: "Empty file path."
      };
    }
    var fs = require("fs")
      , path = require("path")
      , existsSync = (typeof fs.existsSync == 'function')
          ? fs.existsSync
          : path.existsSync
      ;
    
    if(!existsSync(filePath)) {
      return {
        status: 'failure',
        result: "Invalid file path."
      };
    }
    if(path.extname(filePath) !== '.wml') {
      return {
        status: 'failure',
        result: "Invalid file extension."
      };
    }
    return {
      status: 'success',
      result: fs.readFileSync(filePath, "utf8")
    };
  });
  
  grunt.registerHelper(
    'getOutputFileFromInputFile',
      function(filePath, dest, basePath) {
      var path = require("path")
        , basePathIndex = filePath.indexOf(basePath)
        , filePathSections = path.normalize(filePath).split('/')
        , fileParentPath = filePathSections
                            .slice(0, filePathSections.length - 1)
                            .join('/') + '/'
        ;
      
      if(basePath != '' && basePathIndex > -1) {
        fileParentPath = fileParentPath.substr(0, basePathIndex) +
          fileParentPath.substr(basePathIndex + basePath.length);
      }
      return dest +
        fileParentPath +
        path.basename(filePath, '.wml') +
        '.html';
    }
  );

};
