const express = require('express');
const messagesController = require('../controllers/messages_controller');

const router = express.Router();
router.get('/', messagesController.get);
router.post('/', messagesController.post);
router.get('/landlord', messagesController.getLandlord);
router.post('/landlord', messagesController.postLandlord);

module.exports = router;