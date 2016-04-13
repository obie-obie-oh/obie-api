const express = require('express');
const choresController = require('../controllers/chores_controller');

const router = express.Router();
router.get('/', choresController.get);

module.exports = router;