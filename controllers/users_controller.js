const usersModel = require('../models/users_model');
const invokeModel = require('../helpers/controllers').invokeModel;
const comparePassword = require('../helpers/authentication').comparePassword;

module.exports = {
  post: function(req, res) {
    console.log(req.body.password);
    const params = [req.body.name, req.body.email, req.body.password];
    invokeModel(req, res, params, usersModel, 'post');
  },

  getUserByEmail: function(req, res) {
    const params = [req.params.email];
    invokeModel(req, res, params, usersModel, 'getUserByEmail');
  }
}