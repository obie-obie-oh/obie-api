const express = require('express');
const billsController = require('../controllers/bills_controller')

const router = express.Router();

router.get('/', billsController.getUnpaidBills);
router.get('/paid', billsController.getPaidBills);
router.post('/', billsController.post);

module.exports = router;