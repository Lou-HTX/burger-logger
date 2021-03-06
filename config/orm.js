var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, cols, vals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(tableInput, colVals, boolean, colName, condition, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableInput, colVals, boolean, colName, condition], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;