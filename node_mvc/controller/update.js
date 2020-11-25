var updateModel = require("../model/update");

module.exports = {
    // query data to place into rectangle form
    editData: function(req, res) {
        let editData = req.params.id;
        updateModel.editData(editId, function(data) {
            res.render('rect-form', { editData: data });
            console.log("found previous rectangle parameters with id " + updateID);
        });
    },

    // change data for rectangle with id
    updateData: function(req, res) {
        let inputData = {
            Width: req.body.Width,
            Height: req.body.Height,
            Color: req.body.Color
        };

        let updateID = req.params.id;
        updateModel.updateData(inputData, updateID, function(data) {
            res.redirect('/actions/show');
            console.log("changed rectangle parameters with id " + updateID);
        });
    }
}
