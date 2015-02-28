module.exports = function(grunt) {

	// config
	grunt.initConfig({
		less: {
			build1: {
				src: 'src/style1.less',
				dest: 'build/styles1.css'
			},
			build2: {
				files: {
					'build/styles2.css' : 'src/style2.les'
				}
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
