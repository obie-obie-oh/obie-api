const userModel = require('../models/users_model');
const config = require('../config');
const jwt = require('jwt-simple');

module.exports = {
  attachUser: function(req, res, next) {
    //TODO: obtain userid and houseId from jwt

    const userData = jwt.decode(req.header.token, config.secret);

    req.user = {
      id: userData.userId,
      houseId: userData.houseId,
      isLandlord: userData.isLandlord
    };
    console.log("USER", req.user);
    next();
  },

  checkAuth: function(req, res, next) {

  },

  checkIfUserExists: function(req, res, next) {
    var params = [req.body.email];
    userModel.getUserByEmail(params, function(err, results) {
      if (err) {
        res.send(500);
      } else if (results.length > 0) {
        res.send(409);
      } else {
        next();
      }
    })
  }

}