module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['./**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};