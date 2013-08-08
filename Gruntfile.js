module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		express: {
			server: {
				options: {
					port: 9000,
					bases: "site"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"express",
		"express-keepalive"
	]);
};