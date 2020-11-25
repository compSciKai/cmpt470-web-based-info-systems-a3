var express = require("express");
var router = express.Router();
var readCon = require("../controller/read");

router.get('/show', readCon.readData);

module.exports = router;
