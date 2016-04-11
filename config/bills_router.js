const billsController = require('../controllers/bills_controller')

module.exports = function(app) {
  //These endpoints should probably be renamed
  app.get('/api/bills', billsController.getUnpaidBills);
  app.get('/api/bills/paid', billsController.getPaidBills);
  app.post('/api/bills', billsController.post);
}