//THE PURPOSE of this file is for quickly and easily setting up the local development
//   database for multiple developers when they join the project, or for resetting the
//   database during development for dev, testing, or other purposes.

require('dotenv').config(); // Load env variables
const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "text" VARCHAR (255),
    "user" VARCHAR (255),
    "added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages ("text", "user")
VALUES
    ('Hello world!', 'Ethan Hall'),
    ('This is a test message.', 'Alice Smith'),
    ('Another message here.', 'Bob Johnson');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done seeding');
}

main();