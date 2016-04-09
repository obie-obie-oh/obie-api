const messagesModel = require('../models/messagesModel.js');

module.exports = {
  invokeModel: function(req, res, params, action) {
    messagesModel[action](params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.json(results);
    });
  }
}