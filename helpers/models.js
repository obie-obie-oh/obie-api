const db = require('../db');

module.exports = {
  makeQuery: function(params, callback, queryStr) {
    db.query(queryStr, params, function (err, results) {
      callback(err, results);
    });
  }
}