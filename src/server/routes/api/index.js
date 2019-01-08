const express = require('express');

const Router = express.Router();
const UserRouter = require('./user');
const NoteRouter = require('./note');

Router.use('/api', UserRouter);
Router.use('/api/note', NoteRouter);

module.exports = Router;
