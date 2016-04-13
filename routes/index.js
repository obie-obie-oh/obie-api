const express = require('express');
const messagesRouter = require('./messages_router');
const choresRouter = require('./chores_router');
const billsRouter = require('./bills_router');
const paymentsRouter = require('./payments_router');

const router = express.Router();
router.use('/messages', messagesRouter);
router.use('/chores', choresRouter);
router.use('/bills', billsRouter);
router.use('/payments', paymentsRouter);

module.exports = router;