module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var tfb_addon_config = {
    dev: 'dev',
    dist: 'dist',
    addon_name: 'input',
  };

  grunt.initConfig({
    tfb: tfb_addon_config,

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= tfb.dist %>/*',
          ]
        }]
      }
    },

    compass: {
      options: {
        sassDir: '<%= tfb.dev %>/<%= tfb.addon_name %>/scss',
        cssDir: '<%= tfb.dev %>/<%= tfb.addon_name %>/css',
        imagesDir: '<%= tfb.dev %>/<%= tfb.addon_name %>/img',
        javascriptsDir: '<%= tfb.dev %>/<%= tfb.addon_name %>/js',
        relativeAssets: true
      },
      dev: {
        options: {
          config: '<%= tfb.dev %>/<%= tfb.addon_name %>/config.rb',
          environment: 'development',
          force: true
        }
      },
      build: {
        options: {
          config: '<%= tfb.dev %>/<%= tfb.addon_name %>/config.rb',
          environment: 'production',
          force: true
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= tfb.dev %>',
          dest: '<%= tfb.dist %>',
          src: [
            'input/**/*',
            '!input/scss',
            '!input/scss/**/*',
            '!input/config.rb',
            '*.md'
          ]
        }]
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= tfb.dev %>/<%= tfb.addon_name %>/css',
        src: '*.css',
        dest: '<%= tfb.dist %>/<%= tfb.addon_name %>/css'
      }
    },

    watch: {
      compass: {
        files: [
          '<%= tfb.dev %>/<%= tfb.addon_name %>/scss/**/*.scss'
        ],
        tasks: ['compass']
      },
      livereload: {
        files: ['<%= tfb.dev %>/<%= tfb.addon_name %>/{,*/}*.{css,js,php}'],
        tasks: ['livereload']
      },
    },
  });

// ------------------------------------

  grunt.renameTask('regarde', 'watch');

  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'compass:build',
    'cssmin'
  ]);

  grunt.registerTask('dev', [
    'livereload-start',
    'watch'
  ]);
};
