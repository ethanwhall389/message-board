const {format} = require('date-fns')

const messages = [
    {
        id: 1,
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        id: 2,
        text: 'Hello world!',
        user: 'Charles',
        added: new Date()
    },
]

function getAllMessages() {
    return messages;
}

function getMessageById(id) {
    console.log('running get message by id:')
    const message = messages.find((message) => {
        console.log(`message id: ${message.id}`)
        console.log(`queried id: ${id}`)
        if (message.id === id) {
            return message;
        }   
    });
    console.log(message);
    return message;
}

function addNewMessage(user, message) {
    const lastMessageId = messages[messages.length-1].id;
    messages.push({id: lastMessageId+1, text: message, user: user, added: new Date()});
}

module.exports = {
    getAllMessages,
    getMessageById,
    addNewMessage,
}