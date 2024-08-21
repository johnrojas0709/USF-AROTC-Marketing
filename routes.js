var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    console.log("HOME PAGE");
    res.render("index");
});

module.exports = router; //communicate to files