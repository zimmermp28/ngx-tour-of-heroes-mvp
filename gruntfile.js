module.exports = (grunt) => {
    grunt.registerTask('default', 'Example TeamCity Progress Messaging', function() {
        const done = this.async();
        grunt.log.writeln("##teamcity[progressMessage 'An example progress message. Waiting 5 seconds']");
        setTimeout(() => {
            grunt.log.writeln("##teamcity[progressMessage '5 seconds over, all done']");
            done();
        }, 5000);
    });
 };