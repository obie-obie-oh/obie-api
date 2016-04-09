module.exports = {
  invokeModel: function(req, res, params, model, action) {
    model[action](params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.json(results);
    });
  }
}