const billsModel = require('../models/bills_model.js');
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

  post: function(req, res) {
    const params = [req.user.id, req.body.total, req.body.name, req.body.dueDate];
    invokeModel(req, res, params, billsModel, 'post');
  }
}