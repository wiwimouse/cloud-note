const express = require('express');
const noteRouter = require('./note');
const router = express.Router();

router.use('/api', noteRouter);

module.exports = router;
