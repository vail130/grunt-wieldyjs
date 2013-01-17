module.exports = function(grunt) {
  "use strict";
  
  grunt.loadNpmTasks('grunt-wieldyjs');

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ["test/**/*.js"]
    },
    lint: {
      files: ["grunt.js", "tasks/**/*.js", "test/**/*.js"]
    },
    wieldyjs: {
      dist: {
        src: "example-wml/markup-test.wml",
        dest: "example-html/markup-test.html"
      }
    },
    watch: {
      files: "<config:lint.files>",
      tasks: "default"
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  grunt.loadTasks("tasks");

  grunt.registerTask("default", "lint test");
};
