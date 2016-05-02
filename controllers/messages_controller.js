const messagesModel = require('../models/messages_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    // params needs to be houseId
    const params = [1];
    invokeModel(req, res, params, messagesModel, 'get');
  },

  post: function(req, res) {
    req.body = req.body.data
    const params = [req.user.id, req.body.text, req.user.houseId]
    invokeModel(req, res, params, messagesModel, 'post')
  },

  getLandlord: function(req, res) {
    // params needs to be houseId
    const params = [1];
    invokeModel(req, res, params, messagesModel, 'getLandlord');
  }
}