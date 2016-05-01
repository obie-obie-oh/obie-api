const choresModel = require('../models/chores_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    // params needs to be house_id
    const params = [1]
    invokeModel(req, res, params, choresModel, 'get')
  },

  post: function(req, res) {
    const params = [1, req.body.name, req.body.category, req.body.due_date, 1]
    invokeModel(req, res, params, choresModel, 'post')
  }
}