const paymentsModel = require('../models/payments_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  getWhatIsOwedToUser: function(req, res) {
    const params = [req.user.id, req.user.id];
    invokeModel(req, res, params, paymentsModel, 'getWhatIsOwedToUser');
  },

  getWhatHasBeenPaidToUser: function(req, res) {
    const params = [req.user.id];
    invokeModel(req, res, params, paymentsModel, 'getWhatHasBeenPaidToUser');
  },

  markPaymentAsPaid: function(req, res) {
    const params = [req.params.paymentId];
    invokeModel(req, res, params, paymentsModel, 'markPaymentAsPaid');
  },

  post: function(req, res) {
    const userPromises = req.body.data.users.map(function(user) {
      return new Promise(function(resolve, reject) {
        const params = [req.insertId, user.id, user.amount];
        paymentsModel.post(params, function (err, results) {
          if (err) {
            reject(err)
          } else {
            resolve(results)
          }
        });
      })
    });

    Promise.all(userPromises).then(function(results) {
      console.log("RESULTS", results);
      res.sendStatus(201);
    }).catch(function(err) {
      console.error(err);
      res.sendStatus(500);
    });
  }
}