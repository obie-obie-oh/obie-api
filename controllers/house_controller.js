const houseModel = require('../models/house_model');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  getHouseData: function(req, res) {
    const params = [req.user.houseId];
    invokeModel(req, res, params, houseModel, 'getHouseData')
  }
}