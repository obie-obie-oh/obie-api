const messagesModel = require('../models/messages_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  get: function(req, res) {
    // params needs to be houseId
    const params = [1]
    invokeModel(req, res, params, messagesModel, 'get')
  }
}