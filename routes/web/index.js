var express = require("express");
var router = express.Router();

//ADD ERROR AND INFO MESSAGES

router.use("/", require("./home"));

module.exports = router; //communicate to files