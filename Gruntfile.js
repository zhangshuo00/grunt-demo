/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
      eslint: {
        options: {
          eslintrc: '.eslintrc.json'
        },
        src: ['*.js']
      }
    });
  
    grunt.loadNpmTasks('grunt-eslint');
  
    grunt.registerTask('default', ['eslint']);
  };