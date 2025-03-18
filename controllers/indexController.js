const db = require('../models/db');
const asyncHandler = require('express-async-handler');
const {format} = require('date-fns');

const getAllMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages().map((message) => {
        return {
                id: message.id,
                text: message.text,
                user: message.user,
                added: format(message.added, 'MMM dd, yyyy'),
                }
    });
    if (!messages) {
        throw new Error('Messages not found');
    }
    res.render('index', {messages: messages});
})

const addNewMessage = asyncHandler(async (req, res) => {
    const {user, message} = req.body;
    db.addNewMessage(user, message);
    res.redirect('/');
})

module.exports = {
    getAllMessages,
    addNewMessage,
}