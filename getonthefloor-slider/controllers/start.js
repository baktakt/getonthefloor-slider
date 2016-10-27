
var fs = require('fs'),
path = require('path'),
homeDir = require('home-dir').directory;

module.exports.controller = function(app) {
  app.get('/', function(req, res) {
      // any logic goes here

      function getDirectories(srcpath) {
        return fs.readdirSync(srcpath).filter(function(file) {
          return fs.statSync(srcpath + file).isDirectory();
        });
      }
      var srcPath = path.join( homeDir, '/presentations/');
      var folders = getDirectories(srcPath);
      res.render('start', { 'folders': folders })
  });
}
