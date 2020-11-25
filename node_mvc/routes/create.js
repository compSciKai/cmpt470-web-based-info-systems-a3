var express = require("express");
var router = express.Router();
var createCon = require("../controller/create");

router.get('/form', createCon.rectForm);
router.post('/create', createCon.createData)

module.exports = router;
