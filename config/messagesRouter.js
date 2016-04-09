const messagesController = require('../controllers/messagesController')

module.exports = function(app) {
  app.get('/api/messages', messagesController.get);
}