const express = require('express');
const mongoose = require('mongoose');
const mwJWT = require('../../middlewares/jwt');

const Router = express.Router();
const NoteModel = mongoose.model('Note');
const UserModel = mongoose.model('User');

Router.param('slug', function (req, res, next, value) {
  NoteModel.findOne({ slug: value })
    .populate('author')
    .then((note) => {
      if (!note) return res.sendStatus(404);
      req.note = note;
      next();
    })
    .catch(next);
});

Router.post('/', mwJWT(), async function (req, res, next) {
  try {
    const user = await UserModel.findById(req.user.id);

    if (!user) return res.sendStatus(401);

    const note = new NoteModel({
      ...req.body.note,
      author: user,
    })

    await note.save();

    return res.json(note.toNoteJSON());
  } catch(err) {
    return next(err);
  }
});

Router.get('/:slug', mwJWT(), function (req, res) {
  if (!req.note.isPermissioned(req.user.id)) {
    return res.sendStatus(403);
  }

  return res.json(req.note.toNoteJSON());
});

Router.put('/:slug', mwJWT(), async function (req, res, next) {
  if (!req.note.isPermissioned(req.user.id)) {
    return res.sendStatus(403);
  }

  req.note.body = req.body.note.body;

  try {
    await req.note.save();
    return res.json(req.note.toNoteJSON());
  } catch(err) {
    return next(err);
  }
});

Router.delete('/:slug', mwJWT(), async function (req, res, next) {
  if (!req.note.isPermissioned(req.user.id)) {
    return res.sendStatus(403);
  }

  try {
    await req.note.remove();
    return res.sendStatus(200);
  } catch (err) {
    return next(next);
  }
})

module.exports = Router;
