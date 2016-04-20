const usersModel = require('../models/users_model');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  post: function(req, res) {
    const params = [req.body.name, req.body.email, req.body.password];
    invokeModel(req, res, params, usersModel, 'post');
  },

  getUserByEmail: function(req, res) {
    const params = [req.params.email];
    invokeModel(req, res, params, usersModel, 'getUserByEmail');
  }
}