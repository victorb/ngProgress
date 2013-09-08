module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                runnerPort: 9876,
                singleRun: true,
                reporters: ['progress'],
                browsers: ['PhantomJS']
            }
        },
        concat: {
            banner: "Some information",
            dist: {
                src: ['src/provider.js', 'src/directive.js', 'src/module.js'],
                dest: 'ngProgress.js'
            }
        },
        uglify: {
            options: {
                banner: '/*\n<%= pkg.name %> <%= pkg.version %> - <%= pkg.description %> \n(C) 2013 - <%= pkg.author %> \nLicense: <%= pkg.license %> \nSource: <%= pkg.url %> \nDate Compiled: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                browser: true
            },
            all: 'src/*.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['jshint', 'karma', 'concat', 'uglify']);
};