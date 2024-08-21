//import modules
var express = require('express');
var path = require('path');
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash");
var params = require("./parameters/params");
const bodyParser = require('body-parser');

var app = express();

//connect to mongodb
mongoose.connect(params.DATABASECONNECTION, { useUnifiedTopology: true, useNewUrlparser: true, useCreateIndex:true });

//choose port, views directory, and view engine
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));//specify views directory
app.set("view engine", "ejs"); //specify view engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(session({
    secret: "lalalalala",
    resave1: false,
    saveUninitialized: false
}));

//authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use("/", require("./routes/web")); // use the routes.js file
app.use("/api", require("./routes/api"));

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});
