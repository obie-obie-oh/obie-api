const queries = require('../constants/queries').bills;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  getUnpaidBills: function(params, callback) {
    makeQuery(params, callback, queries.getUnpaidBills);
  },
  
  getPaidBills: function(params, callback) {
    makeQuery(params, callback, queries.getPaidBills);
  }
}