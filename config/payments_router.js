const paymentsController = require('../controllers/payments_controller')

module.exports = function(app) {
  //These endpoints should probably be renamed
  app.get('/api/payments', paymentsController.getWhatIsOwedToUser);
  app.get('/api/payments/paid', paymentsController.getWhatHasBeenPaidToUser);
}