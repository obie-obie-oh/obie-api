const paymentsModel = require('../models/payments_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  getWhatIsOwedToUser: function(req, res) {
    //user_id, user_id
    const params = [1, 1];
    invokeModel(req, res, params, paymentsModel, 'getWhatIsOwedToUser');
  },

  getWhatHasBeenPaidToUser: function(req, res) {
    //user_id
    const params = [1];
    invokeModel(req, res, params, paymentsModel, 'getWhatHasBeenPaidToUser');
  }
}