const bcrypt = require('bcrypt-nodejs');

module.exports = {
  comparePassword: function() {

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
  }
}