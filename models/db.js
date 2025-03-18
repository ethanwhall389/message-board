const messages = [
    {
        text: 'Hi there!',
        userId: 1,
        added: new Date()
    },
    {
        text: 'Hello world!',
        userId: 2,
        added: new Date()
    },
]

const users = [
    {
        id: 1,
        firstName: 'Amando',
        lastName: 'Jebinski',
    },
    {
        id: 2,
        firstName: 'Charles',
        lastName: 'Swarth',
    }
]

function getAllMessages() {
    return messages.map((message) => {
        const user = users.find((user) => user.id === message.userId);
        return {
            text: message.text,
            userFirstName: user.firstName,
            userLastName: user.lastName,
            added: message.added,
        }
    });
}

function getMessagesByUser(userId) {
    return messages.filter((message) => message.userId === userId);
}