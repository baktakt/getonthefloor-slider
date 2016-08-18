
var fs = require('fs'),
path = require('path');

module.exports.controller = function(app) {
  app.get('/', function(req, res) {
      // any logic goes here

      function getDirectories(srcpath) {
        return fs.readdirSync(srcpath).filter(function(file) {
          return fs.statSync(path.join(srcpath, file)).isDirectory();
        });
      }
      var folders = getDirectories('./public/presentations');
      res.render('start', { 'folders': folders })
  });
}
