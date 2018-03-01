var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

var app = express()
var port = 1993



// require("./app/routing/apiRoutes.js")
// require("./app/routing/htmlRoutes.js")
var friends = require("./app/data/friends.js")

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

//Stays in server.js
app.post("/api/new", function(req, res) {
    var newMatch = req.body;

  console.log(newMatch);

friends.push(newMatch)

  // res.json(newMatch);


//   var matchName = ""
//   var totalDifference = 40;
//   var matchScores = newMatch.scores;
//       for (var i = 0; i < friends.length; i++) {

//       var diff = 0;
//       for (var j = 0; j < matchScores.length; j++) {
//         diff += Math.abs(friends[i].scores[j] - matchScores[j]);
//       }

//       if (diff < totalDifference) {


//         totalDifference = diff;
//         matchName = friends[i].name;
//         // matchImage = friends[i].photo;
//       }
//     }
//     res.json({matchName: matchName});
// console.log(res)
// console.log(res.json({matchName: matchName}))
// console.log(matchName)
})

app.listen(port);
