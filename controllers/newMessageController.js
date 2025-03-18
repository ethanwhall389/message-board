const db = require('../models/db');
const asyncHandler = require('express-async-handler');

const newMessageForm = asyncHandler(async (req, res) => {
    res.render('form');
})

module.exports = {
    newMessageForm,
}