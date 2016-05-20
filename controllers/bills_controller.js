const billsModel = require('../models/bills_model');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  getUnpaidBills: function(req, res) {
    const params = [req.user.id, req.user.id];
    invokeModel(req, res, params, billsModel, 'getUnpaidBills');
  },

  getPaidBills: function(req, res) {
    const params = [req.user.id];
    invokeModel(req, res, params, billsModel, 'getPaidBills');
  },

  post: function(req, res, next) {
    req.body.data.billDueDate = req.body.data.billDueDate || null;
    const params = [req.user.id, req.body.data.billTotal, req.body.data.billName, req.body.data.billDueDate];
    billsModel.post(params, function(err, results) {
      if (err) { 
        console.error(err);
        res.sendStatus(500); 
      }
      console.log(results)
      req.insertId = results.insertId;
      next();
    });
  }
}