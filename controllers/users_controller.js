const usersModel = require('../models/users_model');
const invokeModel = require('../helpers/controllers').invokeModel;
const comparePassword = require('../helpers/authentication').comparePassword;
const tokenForUser = require('../helpers/authentication').tokenForUser;

module.exports = {
  signin: function(req, res, next) {
    res.send({token: tokenForUser(req.user)});
  },

  post: function(req, res) {
    const params = [req.body.name, req.body.email, req.body.password];
    invokeModel(req, res, params, usersModel, 'post');
  }
}