const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const NoteModel = mongoose.model('Note');

router.get('/note', function (req, res) {
  res.send('/api/note');
})

router.post('/note', function (req, res) {
  const Note = new NoteModel(req.body.note);

  return Note.save()
    .then(() => {
      res.send('success')
    })
})

module.exports = router;
