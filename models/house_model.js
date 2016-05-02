const queries = require('../constants/queries').houses;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  getHouseData: function(params, callback) {
    makeQuery(params, callback, queries.getHouseData);
  }
}