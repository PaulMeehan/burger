const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/all", function(req, res) {
    console.log("start");
    burger.all(function(response) {
        const hbsObject = {
            burger : response
        };
        console.log(hbsObject);
        // res.render("index", hbsObject);
    });
});

router.post("/api/burger/new", function(req, res) {
    console.log("in post");
    burger.create(req.body.name, req.body.devoured, response) {
        const hbsObject = {

        }
    }
});

module.exports = router;
