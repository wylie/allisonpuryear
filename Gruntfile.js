module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			development: {
				files: {
					"site/css/styles.css": "site/css/styles.less"
				}
			}
		},

		watch: {
			css: {
				files: ['site/css/styles.less'],
				tasks: ['less']
			}
		},

		express: {
			server: {
				options: {
					port: 9000,
					bases: "site"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"less"
	]);
	grunt.registerTask("server", [
		"express",
		"watch",
		"express-keepalive"
	]);
};