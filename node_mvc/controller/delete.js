var deleteModel = require("../model/delete");

module.exports = {
    deleteData: function(req, res) {
        let deleteID = req.params.Id;
        deleteModel.deleteData(deleteID, function(data) {
            res.redirect('/actions/show');
            console.log("rectangle with id " + deleteID + " deleted");
        });
    },
}
