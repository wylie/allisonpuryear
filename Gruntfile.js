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
		watch: {
			scripts: {
				files: ['*.php']
			}
		},
		exec: {
			serverup: {
				command: '/Applications/MAMP/bin/start.sh'
			},
			serverdown: {
				command: '/Applications/MAMP/bin/stop.sh'
			}
			
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask("compile", [
		"less"
	]);

	grunt.registerTask('server', [
		'exec:serverup',
		'watch',
		'exec:serverdown'
	]);

	
};