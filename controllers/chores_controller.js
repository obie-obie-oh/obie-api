const choresModel = require('../models/chores_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    // params needs to be house_id
    const params = [req.user.houseId];
    invokeModel(req, res, params, choresModel, 'get')
  },

  post: function(req, res) {
    const params = [req.body.id, req.body.name, req.body.category, req.body.due_date, req.user.houseId]
    invokeModel(req, res, params, choresModel, 'post')
  }
}