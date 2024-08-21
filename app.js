//import modules
var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));//specify views directory
app.set("view engine", "ejs"); //specify view engine

app.use(routes); // use the routes.js file

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});
