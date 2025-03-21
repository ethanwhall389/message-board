const pool = require('./pool');

async function getAllMessages() {
    const query = {
        text: 'SELECT * FROM messages',
    }
    const {rows} = await pool.query(query);
    console.log('get all messages: rows: ');
    console.log(rows);
    return rows;
}

async function getMessageById(id) {
    const query = {
        text: 'SELECT * FROM messages WHERE id=$1',
        values: [id],
    }
    const {rows} = await pool.query(query);
    return rows;
}

async function addNewMessage(user, message) {
    const query = {
        text: 'INSERT INTO messages ("text", "user") VALUES ($1, $2)',
        values: [message, user],
    }
    await pool.query(query);
}

module.exports = {
    getAllMessages,
    getMessageById,
    addNewMessage,
}