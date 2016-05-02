const queries = require('../constants/queries').houses;
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  getHouseData: function(params, callback) {
    console.log('in house model: ', params)
    makeQuery(params, callback, queries.getHouseData);
  }
}