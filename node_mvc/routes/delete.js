var express = require("express");
var router = express.Router();
var deleteCon = require("../controller/delete");

router.get('/delete/:Id', deleteCon.deleteData);

module.exports = router;
