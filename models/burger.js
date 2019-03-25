const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(res) {
            cb(res);
        }); 
    },
    update: function(id, newValues, cb) {
        orm.updateOne("burgers", id, newValues, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;