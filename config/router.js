const messagesRouter = require('./messages_router');
const choresRouter = require('./chores_router');
const billsRouter = require('./bills_router');

module.exports = function(app) {
  messagesRouter(app);
  choresRouter(app);
  billsRouter(app);
}