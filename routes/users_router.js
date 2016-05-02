const express = require('express');
const usersController = require('../controllers/users_controller');
const saltAndHashPassword = require('../helpers/authentication').saltAndHashPassword;
const passportService = require('../helpers/passport');

const passport = require('passport');
const requireSignin = passport.authenticate('local', {session: false});
const requireAuth = passport.authenticate('jwt', {session: false});

const router = express.Router();

router.get('/roommates', usersController.getUsersInHouse)


// TODO: The following routes should probably be moved to auth
router.post('/signin', requireSignin, usersController.signin);
router.post('/', saltAndHashPassword, usersController.post);

//test route to show that auth middleware works
router.get('/test', requireAuth, function(req, res) {
  res.send({hi: 'there'});
});

module.exports = router;