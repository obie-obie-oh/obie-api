const express = require('express');
const paymentsController = require('../controllers/payments_controller')

const router = express.Router();

router.get('/', paymentsController.getWhatIsOwedToUser);
router.get('/paid', paymentsController.getWhatHasBeenPaidToUser);
router.post('/', paymentsController.post);
router.put('/:paymentId', paymentsController.markPaymentAsPaid);

module.exports = router;