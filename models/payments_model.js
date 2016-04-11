const queries = require('../constants/queries').payments;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  getWhatIsOwedToUser: function(params, callback) {
    makeQuery(params, callback, queries.getWhatIsOwedToUser);
  },

  getWhatHasBeenPaidToUser: function(params, callback) {
    makeQuery(params, callback, queries.getWhatHasBeenPaidToUser);
  },

  post: function(params, callback) {
    makeQuery(params, callback, queries.post);
  },

  markPaymentAsPaid: function(params, callback) {
    makeQuery(params, callback, queries.markPaymentAsPaid);
  }
}