module.exports = function(grunt){
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		"electron": {
			osxBuild: {
				options: {
					name: "electron-flash",
					dir: ".",
					out: "build/Release",
					version: "0.36.1",
					platform: "darwin",
					arch: "x64"
				}
			}
		}
	});

	grunt.registerTask("default", ["electron"]);
};

