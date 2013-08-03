module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			compile: {
				src: "less/basic-starter.less",
				dest: "css/basic-starter.css"
			}
		},

		express: {
			server: {
				options: {
					port: 8000,
					bases: '.',
					baseURL: '/html'
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"less"
	]);

	grunt.registerTask("server", [
		"express",
		"express-keepalive"
	]);
	
};