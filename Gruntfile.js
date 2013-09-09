var fs = require('fs');

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
            options: {
                stripBanners: {
                    'block': true,
                    'line': true
                },
                banner: '/*\n<%= pkg.name %> <%= pkg.version %> - <%= pkg.description %> \n(C) 2013 - <%= pkg.author %> \nLicense: <%= pkg.license %> \nSource: <%= pkg.url %> \nDate Compiled: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            dist: {
                src: ['src/provider.js', 'src/directive.js', 'src/module.js'],
                dest: 'build/ngProgress.js'
            }
        },
        uglify: {
            options: {
                banner: '/*\n<%= pkg.name %> <%= pkg.version %> - <%= pkg.description %> \n(C) 2013 - <%= pkg.author %> \nLicense: <%= pkg.license %> \nSource: <%= pkg.url %> \nDate Compiled: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                browser: true
            },
            all: 'src/*.js'
        }
    });

    // use as: grunt version:1.0.1
    grunt.registerTask('version', function(file_version){
        var bower = grunt.file.readJSON('bower.json');
        var npm_package = grunt.file.readJSON('package.json');

        bower.version = file_version;
        npm_package.version = file_version;

        fs.writeFileSync('bower.json', JSON.stringify(bower, null, 4));
        fs.writeFileSync('package.json', JSON.stringify(npm_package, null, 4));
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['jshint', 'karma', 'concat', 'uglify']);
};
