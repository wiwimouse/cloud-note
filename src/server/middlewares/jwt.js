const jwt = require('express-jwt');
const secret = require('../../../config').secret;

module.exports = function () {
  return jwt({ secret });
}
