
var fs = require('fs'),
path = require('path'),
appRoot = require('app-root-path');

module.exports.controller = function(app) {
  app.get('/', function(req, res) {
      // any logic goes here

      function getDirectories(srcpath) {
        return fs.readdirSync(srcpath).filter(function(file) {
          return fs.statSync(srcpath + file).isDirectory();
        });
      }
      var path = appRoot + '/../public/presentations/';
      var folders = getDirectories(path);
      res.render('start', { 'folders': folders })
  });
}
