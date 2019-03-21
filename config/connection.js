// Include dependencies
const mysql = require ("mysql");

// Create a connection to the database.
// Database port number and password passed in from .env file.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DataRules019283",
    database: "burger_db"
});

// Connect to the database.
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;


