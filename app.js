// set variables for environment
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(process.env.PORT || 4000);
var io = require('socket.io')(server);
var path = require('path');
var request = require('request');

var eventCode;

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs
// instruct express to server up static assets
app.use(express.static('public'));

// set routes
app.get('/', function(req, res) {
  res.render('index');
});

console.log('server is running on port' +  process.env.PORT || 4000);