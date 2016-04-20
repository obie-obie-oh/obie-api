const passport = require('passport');
const request = require('request');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const comparePassword = require('./authentication').comparePassword;

//read up on this
const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  request(`http://localhost:6969/api/users/email/${email}`, function(err, res, body) {
    if (err) { return done(err); }
    if (!body) { return done(null, false); }
    body = JSON.parse(body);

    comparePassword(password, body[0].password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, body[0]);
    });
  });
});



passport.use(localLogin);