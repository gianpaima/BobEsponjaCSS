module.exports = function (grunt) {

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			watch: {
				options: {
					livereload: true
				},
				scripts : {
                files : ['css/*.styl'],
                tasks : ['stylus']
            }
			},

			express: {
				all: {
					options: {
						hostname: '192.168.0.45',
						port: 9000,
						bases: ['.'],
						livereload: true
				
					}
				}
			},

			stylus: {
				compile: {
					files: {
						'css/styles.css': 'css/styles.styl',
					}
				}
			}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('server', ['express','watch','stylus']);
}