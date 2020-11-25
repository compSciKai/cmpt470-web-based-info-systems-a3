var createModel = require("../model/create");

module.exports = {
    // create form for user input
    rectForm: function(req, res) {
        res.render('rect-form');
    },

    // construct data object
    createData: function(req, res) {
        let inputData = {
            width: req.body.width,
            height: req.body.height,
            color: req.body.color
        };

        // construct model from data object & send to database
        createModel.createData(inputData, function(data) {
            res.redirect('/actions/form');
            console.log(data.affectedRows + " rectangle created");
        });
    }
}
