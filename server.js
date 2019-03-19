// Incorporate environment variables.
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public/assets')));


app.listen(8080, function() {
    console.log("App listening on PORT: " + 8080);
});
