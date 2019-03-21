// Incorporate environment variables.
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const exphbs = require("express-handlebars");

app.use(express.static(path.join(__dirname, './public/assets')));

const routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(8080, function() {
    console.log("App listening on PORT: " + 8080);
});
