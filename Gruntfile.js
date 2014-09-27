module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			development: {
				files: {
					'app/css/styles.css': 'app/css/styles.less'
				}
			}
		},

		watch: {
			css: {
				files: ['app/css/*.less'],
				tasks: ['less']
			}
		},
		
		sitemap: {
			dist: {
				siteRoot: 'app/'
			}
		},

		express: {
			server: {
				options: {
					port: 9000,
					bases: 'app'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-sitemap');

	grunt.registerTask('compile', [
		'less',
		'sitemap'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'less',
		'express-keepalive'
	]);

};