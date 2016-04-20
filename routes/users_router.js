const express = require('express');
const usersController = require('../controllers/users_controller');
const saltAndHashPassword = require('../helpers/authentication').saltAndHashPassword;

const router = express.Router();

router.post('/', saltAndHashPassword, usersController.post);
router.get('/email/:email', usersController.getUserByEmail);

module.exports = router;