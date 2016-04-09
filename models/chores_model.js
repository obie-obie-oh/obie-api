// const queries = require('queries')
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  get: function(params, callback) {
    var queryStr = "SELECT users.name, chores.id, chores.name as chorename, chores.category, chores.completed, chores.due_date, chores.house_id from chores LEFT OUTER JOIN users ON (chores.user_id = users.id) WHERE Chores.house_id=? and completed=0 ORDER BY chores.due_date";
    makeQuery(params, callback, queryStr)   
  }
}