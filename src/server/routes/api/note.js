const express = require('express');
const router = express.Router();

router.get('/note', function (req, res) {
  res.send('/api/note');
})

module.exports = router;
