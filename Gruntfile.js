'use strict';

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            dev: {
                script: 'index.js'
            }
        }
    });

    grunt.registerTask('start:dev', ['nodemon']);
}