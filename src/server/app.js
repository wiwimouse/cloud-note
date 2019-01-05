const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../build')));

app.use('/', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendfile(path.join(__dirname, '../../build', 'index.html'));
  });
}

module.exports = app;
