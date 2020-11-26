var updateModel = require("../model/update");

module.exports = {
    // query data to place into rectangle form
    editData: function(req, res) {
        console.log('request object: ' + JSON.stringify(req.params));
        let editID = req.params.Id;
        updateModel.editData(editID, function(data) {
            res.render('rect-form', { editData: data });
            console.log("found previous rectangle parameters with id " + editID);
        });
    },

    // change data for rectangle with id
    updateData: function(req, res) {
        console.log('request object: ' + JSON.stringify(req.body));
        let inputData = {
            Width: req.body.width,
            Height: req.body.height,
            Color: req.body.color,
            Bob: req.body.bob
        };

        let updateID = req.params.Id;
        updateModel.updateData(inputData, updateID, function(data) {
            res.redirect('/actions/show');
            console.log("changed rectangle parameters with id " + updateID);
        });
    }
}
