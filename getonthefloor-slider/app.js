// set variables for environment
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(process.env.PORT || 3000);
var io = require('socket.io')(server);
var path = require('path');
var request = require('request');
var fs = require('fs');
var homeDir = require('home-dir').directory;

var eventCode;

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs
// instruct express to server up static assets
app.use('/presentations', express.static(homeDir + '/presentations'));
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public' + '\n');

fs.readdirSync(__dirname + '/controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require(__dirname + '/controllers/' + file);
      route.controller(app);
  }
});

console.log('server is running on port ' +  process.env.PORT || 3000);
