var express = require('express');
var router = express.Router();

router.get("/", function(req, res){ //route home
    res.json("json status code for users api");
});

module.exports = router; //communicate to files