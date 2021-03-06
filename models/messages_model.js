const queries = require('../constants/queries').messages;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  get: function(params, callback) {
    makeQuery(params, callback, queries.get);
  },
  getLandlord: function(params, callback) {
    makeQuery(params, callback, queries.getLandlord);
  },
  post: function(params, callback) {
    makeQuery(params, callback, queries.post)
  },
  postLandlord: function(params, callback) {
    makeQuery(params, callback, queries.postLandlord)
  }
}