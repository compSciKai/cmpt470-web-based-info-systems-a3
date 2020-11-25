var msql_db = require('../db_connect');

module.exports = {
    readData: function(callback) {
        var q = "SELECT * FROM Rectangles";
        msql_db.query(q, function(err, data, fields) {
            if (err) throw err;
            return callback(data);
        });
    }
}
