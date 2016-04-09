const messagesController = require('../controllers/messages_controller')

module.exports = function(app) {
  app.get('/api/messages', messagesController.get);
}