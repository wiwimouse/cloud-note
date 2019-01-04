var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
    console.log('adsf');
    res.sendfile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = app;
