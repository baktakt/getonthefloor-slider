var fs = require('fs'),
path = require('path');

module.exports.controller = function(app) {
  app.get('/presentation/:id', function(req, res) {
      // any logic goes here
      presentationId = req.params.id;

      var path = './public/presentations/' + presentationId + '/';

      function getFiles (dir, id, files_){
          files_ = files_ || [];
          var files = fs.readdirSync(dir);
          for (var i in files){
              var name = dir + '/' + files[i];
              if (fs.statSync(name).isDirectory()){
                  getFiles(name, files_);
              } else {
                  var pathToSlide = '/presentations/' + id + '/' + files[i];
                  files_.push(pathToSlide);
              }
          }
          return files_;
      }

      var files = getFiles(path, presentationId);
      console.log('files in ' + path + " = " + files);
      res.render('presentation', { 'files': files })
  });
}
