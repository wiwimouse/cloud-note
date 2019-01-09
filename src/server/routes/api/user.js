const express = require('express');
const mongoose = require('mongoose');
const local = require('../../middlewares/local');
// const jwt = require('../../middlewares/jwt');

const Router = express.Router();
const User = mongoose.model('User');

Router.post('/user', function (req, res, next) {
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

Router.post(
  '/user/login',
  local(),
  function (req, res) {
    res.json({ user: req.user.toAuthJSON() });
  });

module.exports = Router;
