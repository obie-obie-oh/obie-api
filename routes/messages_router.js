const express = require('express');
const messagesController = require('../controllers/messages_controller');

const router = express.Router();
router.get('/', messagesController.get);
router.post('/', messagesController.post);
router.get('/landlord', messagesController.getLandlord);

module.exports = router;