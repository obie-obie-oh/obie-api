const messagesModel = require('../models/messagesModel.js');
const invokeModel = require('../helpers/controllers').invokeModel;

// const invokeModel = function(req, res, params, action) {
//   messagesModel[action](params, function (err, results) {
//     if (err) {
//       res.sendStatus(500);
//     }
//     res.json(results);
//   });
// };


module.exports = {
  get: function(req, res) {
    const params = [1]
    invokeModel(req, res, params, 'get')
  }
}
