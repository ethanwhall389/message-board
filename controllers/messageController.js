const db = require('../models/db');
const asyncHandler = require('express-async-handler');

const getMessageById = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const message = await db.getMessageById(Number(id));
    if (!message || message.length < 1) {
        throw new Error('Message not found');
    }
    res.render('message-page', {message: message});
    return;
})

module.exports = {
    getMessageById,
}