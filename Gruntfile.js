/*global module:false*/
module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n": "" %>',

        // Sass
        sass: {
            scss: {
                files: [ {
                    style: 'compressed',
                    expand: true,
                    flatten: true,
                    cwd: 'assets/scss',
                    src: [
                        '**/*.scss',
                        '!**/_*.scss'
                    ],
                    dest: 'assets/css/',
                    ext: '.css'
                } ]
            }
        },

        // CoffeeScript
        coffee : {
            dist : {
                files : [ {
                    expand : true,
                    flatten : true,
                    cwd : 'assets/coffee/',
                    src : [
                        '**/*.coffee'
                    ],
                    dest : 'assets/js/',
                    ext : '.js'
                } ]
            }
        },

        // Image Minification
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [ {
                    expand: true,
                    flatten: true,
                    cwd: 'assets/img/',
                    src: [
                        '*.png',
                        '*.jpg'
                    ],
                    dest: 'assets/img/'
                } ]
            }
        },

        // Concatenation
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'assets/js/build.js': [
                        'assets/js/scripts.js',
                        'assets/js/vendor/*.js'
                    ]
                }
            }
        },

        // JS Uglification
        uglify: {
            dist: {
                files: {
                    'assets/js/build.min.js': [
                        'assets/js/build.js'
                    ]
                }
            }
        },

        // CSS Minification
        cssmin: {
            dist: {
                files: {
                    'assets/css/main.min.css': [
                        'assets/css/main.css'
                    ]
                }
            }
        },

        // Task Configuration
        watch: {
            dist: {
                files: [
                    'assets/scss/**/*.scss',
                    'assets/coffee/**/*.coffee',
                    'assets/js/**/*.js'
                ],
                tasks: [
                    'sass',
                    'coffee',
                    'uglify',
                    'concat',
                    'cssmin',
                    'imagemin'
                ],
                options: {
                    livereload: true
                }
            }
        }

    });

    // Required Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default Task
    grunt.registerTask(
        'default', [
            'sass',
            'coffee'
        ]
    );

    // Build Task
    grunt.registerTask(
        'build', [
            'default',
            'concat',
            'uglify',
            'cssmin'
        ]
    );

};