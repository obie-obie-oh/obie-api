const queries = require('../constants/queries').chores;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  get: function(params, callback) {
    makeQuery(params, callback, queries.get);
  },

  post: function(params, callback) {
    makeQuery(params, callback, queries.post);
  },

  put: function(params, callback) {
    makeQuery(params, callback, queries.put);
  }
}