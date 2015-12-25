'use strict';

var os = require("os");
var app = require("app");
var BrowserWindow = require("browser-window");

var mainWindow = null;

var flashplayer = (function(platform){switch(platform){
	case "win32": return __dirname + "\\pepflashplayer.dll";
	case "darwin": return __dirname + "/PepperFlashPlayer.plugin";
	default: return __dirname + "libpepflashplayer.so";
}})(os.platform());

app.commandLine.appendSwitch("ppapi-flash-path", flashplayer);

app.on("window-all-closed", function() {
	app.quit();
});

app.on("ready", function() {

	mainWindow = new BrowserWindow({
		"width": 761,
		"height": 610,
		"resizable": false,
		"webPreferences": {
			"nodeIntegration": false,
			"plugins": true
		}
	});

	mainWindow.on("closed", function() {
		mainWindow = null;
	});

	mainWindow.loadURL("http://weathernews.jp");
	//mainWindow.webContents.openDevTools();
});
