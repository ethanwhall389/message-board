const { Pool } = require("pg");
require("dotenv").config();

console.log("All env variables: ", process.env);

console.log("Database connection settings:", {
  connectionString: process.env.DATABASE_URL,
});

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Railway
});
