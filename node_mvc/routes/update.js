var express = require("express");
var router = express.Router();
var updateCon = require("../controller/update");

router.get('/edit/:Id', updateCon.editData);
router.post('/update/:Id', updateCon.updateData);

module.exports = router;
