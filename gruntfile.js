module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [
        'gruntfile.js', 
        'server/client/app/**/*.js', 
        'server/client/models/*.js',
        'server/client/helpers/*.js',
        'server/client/routes/*.js',
        'server/client/app.js',
        'specs/**/*.js'
        ],
      options: {
        globals: {
          jQuery: true
        }
      },
    },
    
    shell: {
      servertest:{
        command: 'DEBUG=grump:* node ./server/bin/www & sleep 1; ./node_modules/.bin/mocha -R spec specs/server/*.js; pkill -n node;'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['specs/server/*.js']
      }
    },

    karma: {
      unit: {
        configFile:"karma.conf.js"
      }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask('test', ['jshint','shell:servertest','karma']);

};