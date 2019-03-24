const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        console.log("yup");
        debugger;
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(columns, values, cb) {
        console.log("in create");
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        }); 
    },
    update: function(id, newValues, cb) {
        console.log("in update");
        orm.updateOne("burgers", id, newValues, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;