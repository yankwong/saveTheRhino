module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        app: {
          src: [
            './client/javascripts/*.js',
          ],
          dest: './client/dist/app.js'
        }
      },
      watch: {
        concat: {
          files: ['./client/javascripts/*.js'],
          tasks: ['concat']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
  
    grunt.registerTask('default', ['watch', 'concat']);
  
  };