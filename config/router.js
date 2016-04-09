const messagesRouter = require('./messagesRouter');

module.exports = function(app) {
  messagesRouter(app);

  // choresRouter(app);
  // paymentsRouter(app);
  // billsRouter(app);
}