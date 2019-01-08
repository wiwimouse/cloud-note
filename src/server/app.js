const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const UserSchema = require('./models/user');
const NoteSchema = require('./models/note');

mongoose.model('User', UserSchema);
mongoose.model('Note', NoteSchema);

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
