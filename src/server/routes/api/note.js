const express = require('express');
const mongoose = require('mongoose');

const Router = express.Router();
const NoteModel = mongoose.model('Note');

Router.param('slug', function (req, res, next, value) {
  NoteModel.findOne({ slug: value })
    .then((note) => {
      if (!note) return res.sendStatus(404);
      req.note = note;
      next();
    })
    .catch(next);
});
Router.get('/:slug', function (req, res) {
  const { body, slug } = req.note

  res.json({ note: { body, slug } });
});
Router.post('/', function (req, res, next) {
  const Note = new NoteModel(req.body.note);

  return Note.save()
    .then(() => {
      res.send('success');
    })
    .catch(next);
});

module.exports = Router;
