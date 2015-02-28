module.exports = function(grunt) {

	// config
	grunt.initConfig({
		less: {
			build: {
				src: 'src/style1.less',
				dest: 'build/styles.css',
			}
		}
	});

	// pulgin
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// tasks
	grunt.registerTask('default', 'less');
};
