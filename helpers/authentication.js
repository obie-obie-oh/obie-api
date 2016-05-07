const bcrypt = require('bcrypt-nodejs');
const config = require('../config');
const jwt = require('jwt-simple');

module.exports = {
  comparePassword: function(candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword, hashedPassword, function(err, isMatch) {
      if (err) {
        return callback(err);
      }

      callback(null, isMatch);
    })
  },

  saltAndHashPassword: function(req, res, next) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err); }

      bcrypt.hash(req.body.password, salt, null, function(err, hash) {
        if (err) { return next(err); }
        
        req.body.password = hash;
        next();
      });
    });
  },

  tokenForUser: function(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ userId: user.id, houseId:user.house_id, isLandlord:user.is_landlord, iat: timestamp}, config.secret)
  }
}