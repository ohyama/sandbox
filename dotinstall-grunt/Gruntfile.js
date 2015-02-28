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
					'mysite/css/styles.min.css': '<%= less.build1.dest %>'
				}
			}
		},

		watch: {
			files: 'src/*.less',
			tasks: ['less', 'csslint', 'cssmin']
						 
		},

		connect: {
			server: {
				options: {
					base: 'mysite',
					port: 5000,
					hostname: '127.0.0.1'
				}
			}
		}

	});

	// pulgin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// tasks
	grunt.registerTask('default', ['less', 'csslint', 'cssmin', 'connect', 'watch']);
	grunt.registerTask('task1', 'less:build1');
	grunt.registerTask('task2', 'less:build2');
};
