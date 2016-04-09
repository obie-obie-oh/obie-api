// const queries = require('queries')
const makeQuery = require('../helpers/models').makeQuery;

module.exports = {
  get: function(params, callback) {
    var queryStr = "SELECT users.name, users.user_image_url, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=0 ORDER BY messages.time DESC LIMIT 50";
    makeQuery(params, callback, queryStr)   
  }
}