const express = require('express');
const billsController = require('../controllers/bills_controller')
const paymentsController = require('../controllers/payments_controller')

const router = express.Router();

router.get('/', billsController.getUnpaidBills);
router.get('/paid', billsController.getPaidBills);
router.post('/', billsController.post, paymentsController.post);

module.exports = router;