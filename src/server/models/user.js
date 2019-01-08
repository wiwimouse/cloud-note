const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = 'asdf'

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, match: [/^[a-zA-Z0-9]+$/] },
  hash: String,
  salt: String
}, { timestamps: true });

UserSchema.plugin(uniqueValidator);
UserSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
}
UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}
UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today.setDate(today.getDate() + 60));

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, secret);
}
UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    token: this.generateJWT()
  }
}

module.exports = UserSchema;
