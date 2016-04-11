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
  },

  post: function(req, res) {
    const params = [req.body.billId, req.body.userId, req.body.amount];
    invokeModel(req, res, params, paymentsModel, 'post');
  },

  markPaymentAsPaid: function(req, res) {
    const params = [req.params.paymentId];
    invokeModel(req, res, params, paymentsModel, 'markPaymentAsPaid');
  }
}