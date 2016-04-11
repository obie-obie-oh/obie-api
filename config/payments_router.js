const paymentsController = require('../controllers/payments_controller')

module.exports = function(app) {
  //These endpoints should probably be renamed
  app.get('/api/payments', paymentsController.getWhatIsOwedToUser);
  app.get('/api/payments/paid', paymentsController.getWhatHasBeenPaidToUser);
  app.post('/api/payments', paymentsController.post);
  app.put('/api/payments/:paymentId', paymentsController.markPaymentAsPaid);
}