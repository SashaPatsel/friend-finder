var bodyParser = require('body-parser')
var express = require('express')
var app = express()

module.exports = function(app){
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
}