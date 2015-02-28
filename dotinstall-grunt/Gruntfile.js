module.exports = function(grunt) {

	// config
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		less: {
			build1: {
				src: 'src/style1.less',
				dest: 'build/styles1.css'
			},
			build2: {
				files: {
					'build/styles2.css' : 'src/style2.less'
				},
				options: {
					compress: false
				}

			}
		},

		csslint: {
			check: {
				src: '<%= less.build1.dest %>'
			}
		},

		cssmin: {
			minimize: {
				options: {
					banner: '/*! <%= pkg.name  %> <%= grunt.template.today("yyyy/mm/dd") %> */'
				}, 
				files: {
					'build/style1.min.css': '<%= less.build1.dest %>'
				}
			}
		},

	});

	// pulgin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// tasks
	grunt.registerTask('default', ['less', 'csslint', 'cssmin']);
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
};
