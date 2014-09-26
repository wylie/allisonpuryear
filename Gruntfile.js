module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			development: {
				files: {
					"app/css/styles.css": "app/css/styles.less"
				}
			}
		},

		watch: {
			css: {
				files: ['app/css/*.less'],
				tasks: ['less']
			}
		},

		express: {
			server: {
				options: {
					port: 9000,
					bases: "app"
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
		"less",
		"express-keepalive"
	]);

};