var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

var app = express()
var port = 1993

app.post("/api/new", function(req, res) {
  
})

// require("./app/routing/apiRoutes.js")
// require("./app/routing/htmlRoutes.js")

// apiroutes
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/api/friends", function(req, res) {
    return res.json(matches)
  });

  app.post("/api/friends", function(req, res){
      var newFriend = req.body;


    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  })

//htmlroutes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public", "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public", "survey.html"));
});






app.listen(port);
