module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          src: ['lib/**/*.scss'],
          ext: '.css'
        }]
      }
    },

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: '**/*.{coffee,litcoffee,coffee.md}',
          dest: 'lib',
          ext: '.js'
        }]
      }
    },

    connect: {
      server: {
        proxies: [
        {
          context: '/api',
          host: 'localhost',
          port: 3000,
          https: false,
          xforward: false
        }
        ],
        options: {
          port: '9001',
          hostname: 'localhost',
          middleware: function (connect, options) {
            console.log(options.base);
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            return [
              // include the proxy first
              proxy,
              // serve static files.
              connect.static(options.base[0]),
              // make empty directories browsable.
              connect.directory(options.base[0])
            ];
          }
        }
      }
    },

    watch: {
      sass: {
        files: ['lib/**/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['lib/**/*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:dist']
      }
    },

    vulcanize: {
      default: {

        options: {
          csp: true,
          inline: true,
          strip: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    }

  });

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'connect:server',
      'configureProxies:server',
      'watch'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-vulcanize');
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');

  grunt.registerTask('default', ['watch']);
};

