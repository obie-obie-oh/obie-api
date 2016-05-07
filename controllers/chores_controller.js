const choresModel = require('../models/chores_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    const params = [req.user.houseId];
    invokeModel(req, res, params, choresModel, 'get')
  },

  post: function(req, res) {
    req.body = req.body.data;
    const params = [req.body.userId, req.body.name, req.body.category, req.body.dueDate, req.user.houseId]
    invokeModel(req, res, params, choresModel, 'post')
  }
}