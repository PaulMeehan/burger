const connection = require("./connection.js");

const orm = {

    selectAll : (tableName, cb) => {
        var strSQL = "select * from ??";
        connection.query(strSQL, [tableName], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne : (tableName, fieldList, valueList, cb) => {
        console.log("in insertOne");
        var theseValues = [];
        var strSQL = "insert into " + tableName;
        strSQL = strSQL + " (" + fieldList.toString() + ") values (";
        for (var i=0; i < valueList.length; i++) {
            theseValues.push(valueList[i]);
            strSQL = strSQL + "?";
            if (i < valueList.length - 1) {
                strSQL = strSQL + ", ";
            };
        };
        strSQL = strSQL + ")";
        connection.query(strSQL, theseValues, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },

    updateOne: (tableName, id, updatesObject, cb) => {
        console.log("in updateOne");
        debugger;
        var changeVariables = Object.keys(updatesObject);
        var changeValues = Object.values(updatesObject);
        var numProperties = changeVariables.length;

        var strSQL = "update " + tableName + " set ";
        for (var i = 0; i < numProperties; i++) {
            strSQL = strSQL + changeVariables[i] + " = " + changeValues[i];
            if (i < numProperties - 1) {
                strSQL = strSQL + ", ";
            };
        };
        strSQL = strSQL + " where id = " + id;
        console.log(strSQL);

        connection.query(strSQL, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }

};

module.exports = orm;