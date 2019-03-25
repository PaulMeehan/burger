const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/api/burger/all", function(req, res) {
    burger.all(function(response) {
        const hbsObject = {
            burger : response
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger/new", function(req, res) {
    var newValues = [];
    newValues.push(req.body.burger_name);
    newValues.push(req.body.devoured);

    burger.create(["burger_name", "devoured"], newValues, (response) => {
        res.json({ id : response.insertId });
    });
});

router.put("/api/burger/update/:id", function (req, res) {
    burger.update(req.params.id, { devoured : req.body.devoured }, (response) => {
        if (response.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
