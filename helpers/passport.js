const passport = require('passport');
const userModel = require('../models/users_model');
const config = require('../config');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const comparePassword = require('./authentication').comparePassword;

//Local Strategy
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

//JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  userModel.findUserById(payload.userId, function(err, user) {
    if (err) { return done(err, false); }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);