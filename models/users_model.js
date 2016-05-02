const queries = require('../constants/queries').users;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  post: function(params, callback) {
    makeQuery(params, callback, queries.post);
  },

  getUsersInHouse: function(params, callback) {
    makeQuery(params, callback, queries.getUsersInHouse);
  },

  getUserByEmail: function(params, callback) {
    makeQuery(params, callback, queries.getUserByEmail);
  },

  findUserById: function(params, callback) {
    makeQuery(params, callback, queries.findUserById);
  }
}