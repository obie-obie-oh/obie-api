const choresModel = require('../models/chores_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    // params needs to be house_id
    const params = [1]
    invokeModel(req, res, params, choresModel, 'get')
  }
}