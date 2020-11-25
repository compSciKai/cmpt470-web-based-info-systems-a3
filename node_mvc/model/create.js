var msql_db = require('../db_connect');

module.exports = {
    createData: function(inputData, callback) {
        //console.log('inputData: ' + inputData);
        var q = "INSERT INTO Rectangles SET ?";
        msql_db.query(q, inputData, function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}
