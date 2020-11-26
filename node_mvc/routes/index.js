var express = require('express');
var router = express.Router();
var readRouter = require("../routes/read");

router.get('/', function(req, res, next) {
  res.redirect('/actions/show');
});
router.get('/actions/', function(req, res, next) {
  res.redirect('/actions/show');
});

module.exports = router;
