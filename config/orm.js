const connection = require("./connection.js");

const orm = {

    selectAll : (tableName, cb) => {
        var strSQL = "select * from ??";
        console.log(strSQL);
        connection.query(strSQL, [tableName], (err, results) => {
            console.log("back");
            if (err) throw err;
            cb(results);
        });
    },

    insertOne : (tableName, fieldList, valueList, cb) => {
        var strSQL = "insert into ?? (??) values (?)";
        connection.query(strSQL, [tableName, fieldList, valueList], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }


};

module.exports = orm;