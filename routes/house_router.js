const express = require('express');
const houseController = require('../controllers/house_controller')

const router = express.Router();

router.get('/', houseController.getHouseData);

module.exports = router;