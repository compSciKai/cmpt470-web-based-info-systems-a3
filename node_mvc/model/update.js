var msql_db = require('../db_connect');

module.exports = {
    editData: function(editID, callback) {
        console.log('editID: ' + editID);
        var q = `Select * FROM Rectangles WHERE Id=${editID}`;
        msql_db.query(q, function(err, data) {
            if (err) throw err;
            return callback(data[0]);
        });
    },

    updateData: function(inputData, updateID, callback) {
        console.log('inputData: ' + JSON.stringify(inputData));
        var q = `UPDATE Rectangles SET ? WHERE Id=?`;
        msql_db.query(q, [inputData, updateID], function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}

