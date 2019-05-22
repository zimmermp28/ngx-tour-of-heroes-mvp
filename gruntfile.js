module.exports = (grunt) => {
    grunt.registerTask('default', 'Hello World', () => grunt.log.writeln("##teamcity[buildProblem description='There is a problem with Hello World' identity='123456']"))
 }