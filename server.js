var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");
var express = require("express");
var app = express()
var port = process.env.PORT || 1993;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

var friends = require("./app/data/friends.js")
var theFinalMatch = "";
var theFinalPhoto = "";
var finalData = []

//Stays in server.js
app.post("/api/new", function(req, res) {
    var newMatch = req.body;

    console.log(newMatch);

    // friends.push(newMatch)

    res.json(newMatch);


    var matchName = ""
    //to make sure it runs on first iteration
    var totalDifference = 40;
    var matchScores = newMatch.scores;

    for (var i = 0; i < friends.length; i++) {

        var diff = 0;

        for (var j = 0; j < matchScores.length; j++) {
            diff += Math.abs(friends[i].scores[j] - matchScores[j]);
        }

        //this condition will change x amount of times thru the loop
        console.log(diff)
        console.log(totalDifference)
        if (diff < totalDifference) {
            // console.log("chicken")
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
            theFinalMatch = friends[i].name;
            theFinalPhoto = friends[i].photo;
            sendMatch()

        }
    }

    console.log("your match: ", matchName)
})

function sendMatch() {
    app.get("/api/match", function(req, res) {
      
        finalData.push(theFinalPhoto)
        finalData.push(theFinalMatch) 
        console.log("finalData")
        return res.json(finalData); 
    });
}

app.listen(port);