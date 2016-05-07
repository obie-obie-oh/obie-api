const express = require('express');
const houseController = require('../controllers/house_controller')

const router = express.Router();

router.get('/', houseController.getHouseData);
router.get('/landlord', houseController.getLandlord);

module.exports = router;