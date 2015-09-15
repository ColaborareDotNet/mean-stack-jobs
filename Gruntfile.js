module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['./**/*.js']
    },

    run: { //'grunt-run'
      options: {
        // Task-specific options go here.
      },
      jasmine: {
        cmd: './node_modules/.bin/jasmine',
        args: []
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['jshint', 'run:jasmine']);
};
