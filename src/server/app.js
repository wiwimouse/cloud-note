var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../build')));

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendfile(path.join(__dirname, '../../build', 'index.html'));
  });
}

module.exports = app;
