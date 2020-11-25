var readModel = require("../model/read");

module.exports = {
    readData: function(req, res) {
        readModel.readData(function(data) {
            res.render('rect-data', { fetchData:data });
        });
    }
}
