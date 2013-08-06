module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// less: {
		// 	compile: {
		// 		src: "less/basic-starter.less",
		// 		dest: "css/basic-starter.css"
		// 	}
		// },
		
		express: {
			server: {
				options: {
					port: 9000,
					bases: "site"
				}
			}
		}
	});

	// grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask("compile", [
		"express",
		"express-keepalive"
	]);

	
};