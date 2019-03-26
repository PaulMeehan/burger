// Include dependencies
const mysql = require ("mysql");
require ("dotenv").config();

// Create a connection to the database.
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    port: 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_SECRET || process.env.DATABASE_PW,
    database: process.env.MYSQL_DB || "burger_db"
});

// Connect to the database.
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;


