const messagesRouter = require('./messages_router');
const choresRouter = require('./chores_router');

module.exports = function(app) {
  messagesRouter(app);
  choresRouter(app);
  // paymentsRouter(app);
  // billsRouter(app);
}