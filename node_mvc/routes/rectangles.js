var express = require('express');
var router = express.Router();
var rectanglesModel = require('../model/rectangles');

/* GET rectangles listing. */
router.get('/', function(req, res, next) {
  //var allRectangles = rectanglesModel.getAll();
  //res.send(allRectangles);
  var val = rectanglesModel.connect();
  console.log(val);
  //res.send(val);
  res.send('testing connection: ' + val);

});

module.exports = router;
