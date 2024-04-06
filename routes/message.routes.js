
const messagesRouter = require('express').Router();

const { getMessages } = require('../controllers/message.controller');

messagesRouter.get('/getMessages', getMessages);

module.exports = messagesRouter;