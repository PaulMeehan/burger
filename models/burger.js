const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(bname, bdevoured, cb) {
        var values = bname + ", " + bdevoured;
        orm.insertOne("burgers", "burger_name, devoured", values, function(res) {
            cb(res);
        }); 
    }
};

module.exports = burger;