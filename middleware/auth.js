const userModel = require('../models/users_model');

module.exports = {
  attachUser: function(req, res, next) {
    //TODO: obtain userid and houseId from jwt
    req.user = {id: 2, houseId: 1};
    next();
  },

  checkIfUserExists: function(req, res, next) {
    var params = [req.body.email];
    userModel.getUserByEmail(params, function(err, results) {

      console.log("RESULTS", typeof results, results);
      if (err) {
        res.send(500);
      } else if (results.length > 0) {
        res.send(422);
      } else {
        next();
      }
    })
  }

}