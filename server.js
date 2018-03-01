var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

var app = express()
var port = 1993

app.post("/api/new", function(req, res) {
  
})

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

app.listen(port);
