// Include dependencies
const mysql = require ("mysql");

// Create a connection to the database.
// Database port number and password passed in from .env file.
const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: process.env.DATABASE_PW,
    database: "burger_db"
});

// Connect to the database.
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id: ${conn.threadId}`);
});

module.exports = connection;


