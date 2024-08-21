//store all routes
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    console.log("HOME PAGE");
    res.render("home/index");
});

//route home
router.get("/home", function(req, res){
    res.render("home/home");
});

router.get("/about", function(req, res){
    res.render("home/about");
});

router.get("/login", function(req, res){
    res.render("home/login");
});



module.exports = router; //communicate to files