module.exports = function(grunt) {

	// config
	grunt.initConfig({
		less: {
			build1: {
				src: 'src/style1.less',
				dest: 'build/styles1.css'
			},
			build2: {
				src: 'src/style2.less',
				dest: 'build/styles2.css'
			}
		}
	});

	// pulgin
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// tasks
	grunt.registerTask('default', 'less');
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
};
