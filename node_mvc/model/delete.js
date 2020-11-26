var msql_db = require('../db_connect');

module.exports = {
    deleteData: function(deleteID, callback) {
        console.log('deleteID: ' + deleteID);
        var q = "DELETE FROM Rectangles WHERE Id=?";
        msql_db.query(q, [deleteID], function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}
