const express = require('express');
const usersController = require('../controllers/users_controller')

const router = express.Router();

router.post('/', usersController.post);
router.get('/email/:email', usersController.getUserByEmail);

module.exports = router;