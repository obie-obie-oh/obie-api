const express = require('express');
const usersController = require('../controllers/users_controller');
const saltAndHashPassword = require('../helpers/authentication').saltAndHashPassword;
const passportService = require('../helpers/passport');

const passport = require('passport');
const requireSignin = passport.authenticate('local', {session: false});

const router = express.Router();

router.post('/signin', requireSignin, usersController.signin);
router.post('/', saltAndHashPassword, usersController.post);
router.get('/email/:email', usersController.getUserByEmail);

module.exports = router;