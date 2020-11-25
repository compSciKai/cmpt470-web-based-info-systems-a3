var msql_db = require('../db_connect');

module.exports = {
    editData: function(editID, callback) {
        var q = `Select * FROM Rectangles WHERE id=${editID}`;
        msql_db.query(q, function(err, data) {
            if (err) throw err;
            return callback(data[0]);
        });
    },

    updateData: function(inputData, updateID, callback) {
        var q = `UPDATE Rectangle SET ? WHERE id=?`;
        msql_db.query(q, function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}

