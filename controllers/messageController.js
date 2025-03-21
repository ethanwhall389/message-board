const db = require('../models/db');
const queries = require('../models/queries');
const asyncHandler = require('express-async-handler');

const getMessageById = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const message = await queries.getMessageById(Number(id));
    if (!message || message.length < 1) {
        throw new Error('Message not found');
    }
    res.render('message-page', {message: message[0]});
    return;
})

module.exports = {
    getMessageById,
}