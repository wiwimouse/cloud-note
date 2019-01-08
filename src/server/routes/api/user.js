const express = require('express');
const mongoose = require('mongoose');
// const auth = require('../auth');

const Router = express.Router();
const User = mongoose.model('User');

Router.post('/user', function(req, res, next) {
  const user = new User();
  const { username, password } = req.body.user

  user.username = username;
  user.setPassword(password);
  user.save()
  .then(() => {
    res.json({ user: user.toAuthJSON() });
  })
  .catch(next);
});

module.exports = Router;
