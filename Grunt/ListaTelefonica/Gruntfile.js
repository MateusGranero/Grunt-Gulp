module.exports = function (grunt) {
    
    grunt.initConfig({
        clean:{
            temp:[
                'dist/js/scripts.js',
                'dist/js/libs.js',
                'dist/js/scripts.min.js'
            ],
            all:['dist/']
        },
        jshint:{
            dist:{
                src:['js/**/*.js']
            }
        },
        concat:{
            dist: {
                src:[
                    'js/**/*.js',
                    'lib/serialGenerator/*.js',
                    'lib/ui/*.js'],
                dest:'dist/js/scripts.js'
            },
            libs:{
                src:[
                    'lib/angular/angular.js',
                    'lib/angular/angular-route.js',
                    'lib/angular/angular-message.js'
                ],
                dest:'dist/js/libs.js'
            },
            all:{
                src:[
                    'dist/js/libs.js',
                    'dist/js/scripts.min.js'
                ],
                dest:'dist/js/all.js'
            }
        },
        uglify:{
            scripts:{
                src:['dist/js/scripts.js'],
                dest:'dist/js/scripts.min.js'
            }
        },
        cssmin:{
            all:{
                src:[
                    'lib/bootstrap/bootstrap.css',
                    'css/**/*.css'
                ],
                dest:'dist/css/styles.min.css'
            }
        },
        htmlmin:{
            options: {                                 // Target options 
                removeComments: true,
                collapseWhitespace: true
            },
            views:{
                expand:true,
                cwd:'view/',
                src:['*.html'],
                dest:'dist/view'
            }
        },
        copy:{
            all:{
                src:'index-prod.html',
                dest:'dist/index.html'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    
    grunt.registerTask('prod',['clean:all','jshint','concat:dist','uglify','concat:libs','concat:all','cssmin','htmlmin','copy','clean:temp']);
    
}