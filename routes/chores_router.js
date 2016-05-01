const express = require('express');
const choresController = require('../controllers/chores_controller');

const router = express.Router();
router.get('/', choresController.get);
router.post('/', choresController.post);

module.exports = router;