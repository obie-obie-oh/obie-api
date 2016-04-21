const passport = require('passport');
const request = require('request');
const userModel = require('../models/users_model');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const comparePassword = require('./authentication').comparePassword;

const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  userModel.getUserByEmail([ email ], function(err, user) {
    if (err) { return done(err); }
    if (!user) { return(done, null); }
    
    comparePassword(password, user[0].password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user[0]);
    });
  });
});



passport.use(localLogin);