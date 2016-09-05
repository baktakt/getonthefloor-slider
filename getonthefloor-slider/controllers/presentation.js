var fs = require('fs'),
fileExtension = require('file-extension');

module.exports.controller = function(app, path) {
  app.get('/presentation/:id', function(req, res) {

    SlideType = {
      IMAGE : 'image',
      VIDEO : 'video'
    }

      presentationId = req.params.id;
      console.log(__dirname);
      var path = __dirname + '/../public/presentations/' + presentationId + '/';

      function getSlides (dir, id, files_){
          files_ = files_ || [];
          var files = fs.readdirSync(dir);
          for (var i in files){
              var name = dir + '/' + files[i];
              if (fs.statSync(name).isDirectory()){
                  getFiles(name, files_);
              } else {
                  var pathToSlide = '/presentations/' + id + '/' + files[i];
                  files_.push({'path': pathToSlide, 'type': getFileType(files[i])});
              }
          }
          return files_;
      }
    function getFileType(fileName) {
      console.log(fileName);
      var fileExt = fileExtension(fileName);
      switch (fileExt) {
        case 'mp4':
          return SlideType.VIDEO
          break;
        case 'jpg':
          return SlideType.IMAGE
          break;
        default:
          return SlideType.IMAGE
      }
    }

      var slides = getSlides(path, presentationId);
      console.log('files in ' + path + " = " + slides);
      res.render('presentation', { 'slides': slides })
  });
}
