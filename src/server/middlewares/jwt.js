const jwt = require('express-jwt');
const secret = require('../../../config').jwtSecret;

module.exports = function () {
  return jwt({ secret });
}
