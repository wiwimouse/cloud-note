const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose');

const UserModel = mongoose.model('User');

passport.use(new LocalStrategy(
  {
    usernameField: 'user[username]',
    passwordField: 'user[password]',
  },
  function (username, password, done) {
    UserModel.findOne({ username })
      .then((user) => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false), { error: { 'username or password': 'is invalid' } };
        }
        return done(null, user);
      })
      .catch(done)
  }
));

module.exports = function (opts = { session: false }) {
  return passport.authenticate('local', opts);
}
