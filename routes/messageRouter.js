const {Router} = require('express');
const messageController = require('../controllers/messageController');

const messageRouter = Router();


messageRouter.get('/:id', messageController.getMessageById);

module.exports = messageRouter;