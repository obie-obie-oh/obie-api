const express = require('express');
const usersRouter = require('./users_router');
const messagesRouter = require('./messages_router');
const choresRouter = require('./chores_router');
const billsRouter = require('./bills_router');
const paymentsRouter = require('./payments_router');
const houseRouter = require('./house_router');
const attachUser = require('../middleware/auth').attachUser;

const router = express.Router();
router.use('/users', usersRouter);
router.use('/messages', attachUser, messagesRouter);
router.use('/chores', attachUser, choresRouter);
router.use('/bills', attachUser, billsRouter);
router.use('/payments', attachUser, paymentsRouter);
router.use('/houses', attachUser, houseRouter);

module.exports = router;